import 'filepond-polyfill';

import { FC, useEffect, useRef, useState } from 'react';

import { useController } from 'react-hook-form';

import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import { IUploadDocument, IDocumentDetail, IUploadProps, FileGenerateTypeEnum, FileInsertLocationEnum } from './type';

import { labels } from './labels';

import { Box, deepCopy, useWatch } from '../../../index';

import { FormControl, FormHelperText, Typography } from '@mui/material';

import { getUnixTime } from 'date-fns';

import { FilePondErrorDescription, FilePondFile } from 'filepond';



import ThemeWrapper from '../../App/ThemeWrapper';

import { IResultData } from '../../../types/data';

import MuiUploadSxProps from './stype';

registerPlugin(FilePondPluginFileValidateSize, FilePondPluginFileValidateType, FilePondPluginImagePreview);

/* istanbul ignore next */
const Upload: FC<IUploadProps> = ({ onChange, onRemove, onError, getPath, multiple = false, allowImagePreview, acceptedFileTypes, maxSize, id, path = '', label, name, fileName, apiUrl, token, helperText, chunkUploads = false, chunkForce = false, chunkRetryDelays = [500, 1000, 3000], chunkSize = 5000000, instantUpload = true, itemInsertLocation = 'before', control, setValue, sx, required, }: IUploadProps) => {
    const { field, fieldState: { error }, } = useController({ name, control });
    const uploadItemValue: IUploadDocument[] = useWatch({ control, fieldName: name });

    const [removePermission, setRemovePermission] = useState<boolean>(false);
    const uploadRef: any = useRef();

    const [isInit, setIsInit] = useState<boolean>(true);

    const getFilePath = (): string => (uploadItemValue?.length && uploadItemValue[0].DocumentPath) || path;
    const generateFile = (file: FilePondFile | IUploadDocument, type: FileGenerateTypeEnum) => ({ source: type === FileGenerateTypeEnum.LOCAL ? (file as FilePondFile).source : (file as IUploadDocument), options: { type: 'limbo', file: { name: type === FileGenerateTypeEnum.LOCAL ? (file as FilePondFile).filename : (file as IUploadDocument).DocumentName, size: type === FileGenerateTypeEnum.LOCAL ? (file as FilePondFile).fileSize : (file as IUploadDocument).DocumentSize, date: type === FileGenerateTypeEnum.LOCAL ? Number(getUnixTime(new Date())) : (file as IUploadDocument).Date, }, }, });

    const getLocalFiles = (list: FilePondFile[] | IUploadDocument[], type: FileGenerateTypeEnum): any[] => {
        return list?.length ? list.map((item: any) => generateFile(item, type)) : [];
    };
    const generateFormFileData = (data: IResultData<IDocumentDetail>) => ({ DMSId: data?.Data?.Id, DocumentName: `${data?.Data?.FileName}${data?.Data?.Extension}`, DocumentSize: data?.Data?.Size, DocumentPath: data?.Data?.Path, Date: Number(getUnixTime(new Date())), });

    /** * The component does the deletion via reference. this function works for form data. *
     *  @param file */ 
    const onFileRemove = (file: FilePondFile) => {
        const oldDocuments: IUploadDocument[] = deepCopy(uploadItemValue) || [];
        const removedFile: IUploadDocument | undefined = oldDocuments.find((a: IUploadDocument) => a.DocumentName === file.filename,);
        if (removedFile) {
            const newDocuments: IUploadDocument[] = oldDocuments.filter((a: IUploadDocument) => a.DMSId !== removedFile?.DMSId,);
            setValue(name, newDocuments);
            onRemove && onRemove(removedFile);
            setRemovePermission(false);
        }
    };
    /** * This function works by checking to show newly added from the same files in the component. * 
     * @param file * @param isSuccess It has been added for the purpose of checking whether it is the same for successfully uploaded files. */
    const onLocalFileAdd = (file: any, isSuccess?: boolean) => {
        const refFiles: any[] = getLocalFiles(uploadRef?.current?.getFiles(), FileGenerateTypeEnum.LOCAL);
        if (isSuccess && refFiles?.findIndex((item: any) => item.options.file.name === file.options.file.name) > -1 && refFiles.filter((item: any) => item.options.file.name === file.options.file.name).length > 1) {
            // Same File Indexes For Remove 
            const sameFileIndexes: number[] = refFiles.map((item: any, index: number) => (item.options.file.name === file.options.file.name ? index : '')).filter(String) as number[];
            uploadRef?.current?.removeFile(uploadRef?.current?.getFile(sameFileIndexes[itemInsertLocation === FileInsertLocationEnum.BEFORE ? sameFileIndexes.length - 1 : 0],),);
        }
    };
    /** * For New Form Data * @param data */

    const onFormFileAdd = (data: IResultData<IDocumentDetail>) => {
        const newFile: IUploadDocument = generateFormFileData(data);

        let newDoc: IUploadDocument[] = [];

        const formDocValue: IUploadDocument[] = control._formValues[name];

        if (formDocValue?.findIndex((item: IUploadDocument) => item.DMSId === newFile.DMSId) > -1) { // Same Control 
            newDoc = [...formDocValue.filter((fItem: IUploadDocument) => fItem.DMSId !== newFile.DMSId), newFile];
        }
        else {
            // New Add
            newDoc = [...formDocValue, newFile];

        }
        setValue(name, newDoc);

        // For Same Control --> onLocalFileAdd call
        onLocalFileAdd(generateFile(newFile, FileGenerateTypeEnum.FORM), true);
        onChange && onChange(newFile);

    };
    const getServerInfo = (): any => ({
        revert: (uniqueFileId: any, load: any, err: any) => {
            setRemovePermission(true);

            // to block onremovefile
            err('Remove Error!');
            load();

        }, process: {
            url: apiUrl, method: 'POST', withCredentials: false, headers: { Authorization: `Bearer ${token}`, 'X-Path': getFilePath(), }, timeout: Number(process.env.REACT_APP_ABORT_TIME), onload: (response: string) => onFormFileAdd(JSON.parse(response)),
            // It works as soon as it is successfully added. 

        },
    });
    useEffect(() => {
        getPath && getPath(getFilePath());

        // eslint-disable-next-line 
    }, []);
    useEffect(() => {
        if (isInit && uploadItemValue?.length) {
            uploadRef?.current?.addFiles(getLocalFiles(uploadItemValue, FileGenerateTypeEnum.FORM));
            setIsInit(false);
        }
        // eslint-disable-next-line 
    }, [uploadItemValue]);

    return (<ThemeWrapper >
        <FormControl
            className="upload-form-control"
            error={Boolean(error?.message)}>
            <Box component="fieldset"
                className={`file-upload-container ${error?.message ? 'error' : ''}`} sx={{ ...(MuiUploadSxProps('x') as any), ...sx }}> {label && <Typography component="legend">{required ? `${label} *` : label}</Typography>}
                 <FilePond {...field} 
                 id={id}
                  ref={uploadRef}
                  name={fileName || 'file'}
                   acceptedFileTypes={acceptedFileTypes} 
                   allowFileSizeValidation
                    instantUpload={instantUpload} 
                    checkValidity 
                    chunkUploads={chunkUploads}
                     chunkSize={chunkSize}
                      chunkForce={chunkForce} 
                      chunkRetryDelays={chunkRetryDelays} 
                      {...labels} 
                      {...(maxSize && { maxFileSize: `${String(maxSize)}KB` })}
                       server={getServerInfo()} 
                       allowImagePreview={allowImagePreview} 
                       allowMultiple={multiple}
                        maxParallelUploads={20} 
                        
                    itemInsertLocationFreedom={false}
                     itemInsertLocation={itemInsertLocation} 
                     onremovefile={(err: FilePondErrorDescription | null, file: FilePondFile) => removePermission && file && onFileRemove(file)}
                      onerror={(err: FilePondErrorDescription, file?: FilePondFile, status?: any) => onError && onError(err, file)} 
                      labelIdle={multiple ? 'Dosyaları sürükleyip bu alana bırakın yada <span class="filepond--label-action">Dosya Seçin</span>' : 'Dosyayı sürükleyip bu alana bırakın yada <span class="filepond--label-action">Dosya Seçin</span>'} /> 
                      </Box> 
                      {(error?.message || helperText) && (<FormHelperText className="custom-helper-text upload"> 
                      {error?.message || helperText} </FormHelperText>)}
                       </FormControl> 
                       
                       
                       </ThemeWrapper>);

};
Upload.defaultProps = { allowImagePreview: false, destroy: false, required: false, };




export default Upload