import 'filepond-polyfill';
import { FormControl, FormHelperText } from '@mui/material';
import { getUnixTime } from 'date-fns';
import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { FC, useEffect, useRef, useState } from 'react';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidationSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Controller } from 'react-hook-form';

import { getMessage } from '../_helper';
import { labels } from './labels';

import 'filepond/dist/filepond.min.css'; //
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

import { FileGenerateTypeEnum, FileInsertLocationEnum, IDocumentDetail, IUploadComponent, IUploadDocument } from './type';
import { FilePond, registerPlugin } from 'react-filepond';
import useWatch from '../../../_hooks/useWatch';
import { IResultData } from '../../../types/data';
import { deepCopy } from '../../../_helpers/utility';

registerPlugin(FilePondPluginFileValidationSize, FilePondPluginFileValidateType, FilePondPluginImagePreview);

const Upload: FC<IUploadComponent> = ({
    onChange,
    onRemove,
    onError,
    getPath,
    multiple = false,
    allowImagePreview,
    acceptedFileTypes,
    maxSize,
    id,
    path = '',
    label,
    name,
    fileName,
    apiUrl,
    token,
    helperText,
    chunkUploads = false,
    chunkForce = false,
    chunkRetryDelays = [500, 1000, 3000],
    chunkSize = 5000000,
    instantUpload = true,
    itemInsertLocation = FileInsertLocationEnum.BEFORE,
    control,
    errors,
    setValue,
    className,
}: IUploadComponent) => {
    const uploadItemValue: IUploadDocument[] = useWatch({ control, fieldName: name });
    const [removePermission, setRemovePermission] = useState<boolean>(false);
    const uploadRef: any = useRef();
    const [isInit, setIsInit] = useState<boolean>(true);
    const [filePath, setFilePath] = useState<string>('');

    const getFilePath = (): string => (uploadItemValue?.length && uploadItemValue[0].DocumentPath) || filePath || path;

    const generateFile = (file: FilePondFile | IUploadDocument, type: FileGenerateTypeEnum) => ({
        source: type === FileGenerateTypeEnum.LOCAL_FILE ? (file as FilePondFile).source : (file as IUploadDocument),
        options: {
            type: 'limbo',
            file: {
                name:
                    type === FileGenerateTypeEnum.LOCAL_FILE
                        ? (file as FilePondFile).filename
                        : (file as IUploadDocument).DocumentName,
                size:
                    type === FileGenerateTypeEnum.LOCAL_FILE
                        ? (file as FilePondFile).fileSize
                        : (file as IUploadDocument).DocumentSize,
                date: type === FileGenerateTypeEnum.LOCAL_FILE ? Number(getUnixTime(new Date())) : (file as IUploadDocument).Date,
            },
        },
    });

    const getLocalFiles = (list: FilePondFile[] | IUploadDocument[], type: FileGenerateTypeEnum): any[] => {
        return list?.length ? list.map((item: any) => generateFile(item, type)) : [];
    };

    const generateFormFileData = (data: IResultData<IDocumentDetail>) => ({
        DMSId: data.Data.Id,
        DocumentName: `${data.Data.FileName}${data.Data.Extension}`,
        DocumentSize: data.Data.Size,
        DocumentPath: data.Data.Path,
        Data: Number(getUnixTime(new Date())),
    });

    /**
     * the component does the deletion via referance hthis func works for form data
     * @param file
     *
     */

    const onFileRemove = (file: FilePondFile) => {
        const oldDocuments: any = deepCopy(uploadItemValue) || [];
        const removedFile: any = oldDocuments.find((a: any) => a.DocumentName === file.filename);

        if (removedFile) {
            const newDocuments: IUploadDocument[] = oldDocuments.filter((a: IUploadDocument) => a.DMSId !== removedFile.DMSId);
            setValue(name, newDocuments);
            onRemove && onRemove(removedFile);
            setRemovePermission(false);
        }
    };

    /**
     * the component does the deletion via referance hthis func works for form data
     * @param file
     * @param isSuccess it has been added for the purpose of checking whether it is the same for succesfully upl.
     */
    const onLocalFileAdd = (file: any, isSuccess?: boolean) => {
        const refFiles: any[] = getLocalFiles(uploadRef?.current?.getFiles(), FileGenerateTypeEnum.LOCAL_FILE);
        if (
            isSuccess &&
            refFiles.findIndex((item: any) => item.options.file.name === file.options.file.name) > -1 &&
            refFiles.filter((item: any) => item.options.file.name === file.options.file.name).length > 1
        ) {
            //same file indexes for remove
            const sameFileIndexes: number[] = refFiles
                .map((item: any, index: number) => (item.options.file.name === file.options.file.name ? index : ''))
                .filter(String) as number[];
            uploadRef?.current?.removeFile(
                uploadRef?.current?.getFile(
                    uploadRef?.current?.getFile(
                        sameFileIndexes[itemInsertLocation === FileInsertLocationEnum.BEFORE ? sameFileIndexes.length - 1 : 0]
                    )
                )
            );
        }
    };

    /**
     * for new form data
     * @param data
     *
     */

    const onFormFileAdd = (data: IResultData<IDocumentDetail>) => {
        const newFile: IUploadDocument = generateFormFileData(data);
        let newDoc: IUploadDocument[] = [];
        const formDocValue: IUploadDocument[] = control._formValues[name];
        if (formDocValue.findIndex((item: IUploadDocument) => item.DMSId === newFile.DMSId) > -1) {
            //same cont
            newDoc = [...formDocValue.filter((fItem: IUploadDocument) => fItem.DMSId === newFile.DMSId), newFile];
        } else {
            //new add
            newDoc = [...formDocValue, newFile];
        }

        setValue(name, newDoc);
        onLocalFileAdd(generateFile(newFile, FileGenerateTypeEnum.FORM_FILE), true);
        onChange && onChange(newFile);
    };

    /**
     * the component does the deletion via referance hthis func works for form data
     * @param file
     * @param isSuccess it has been added for the purpose of checking whether it is the same for succesfully upl.
     */

    const getServerInfo = (): any => ({
        revert: (_uniqueFileId: any, load: any, error: any) => {
            setRemovePermission(true); //to block onremove file
            error('Remove Error!');
            load();
        },
        process: {
            url: apiUrl,
            method: 'POST',
            withCredentials: false,
            header: {
                Authorization: `Bearer ${token}`,
                'X-Path': getFilePath(),
            },
            timeout: Number(process.env.REACT_APP_ABORT_TIME),
            onload: (response: any) => {
                onFormFileAdd(JSON.parse(response));
            }, //its works as soon as it is succesfully added
        },
    });

    useEffect(() => {
        getPath && getPath(getFilePath());
         //eslint-disable-next-line 
    }, []);

    useEffect(() => {
        if (isInit && uploadItemValue?.length) {
            uploadRef?.current?.addFiles(getLocalFiles(uploadItemValue, FileGenerateTypeEnum.FORM_FILE));
            setFilePath(uploadItemValue[0]?.DocumentPath);
            setIsInit(false);
        }
         //eslint-disable-next-line 
    }, [uploadItemValue]);

    return (
        <FormControl className={className} error={Boolean(getMessage(errors, name))} style={{ width: '100%' }}>
            <div className={`file-upload-container ${getMessage(errors, name) ? 'error' : ''}`} data-title={label || 'Dosya'}>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }: any) => (
                        <FilePond
                            {...field}
                            id={id}
                            ref={uploadRef}
                            name={fileName || 'file'}
                            acceptedFileTypes={acceptedFileTypes}
                            allowFileSizeValidation={true}
                            instantUpload={instantUpload}
                            checkValidity={true}
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
                            onremovefile={(_err: FilePondErrorDescription | null, file: FilePondFile) =>
                                removePermission && file && onFileRemove(file)
                            }
                            onerror={(error: FilePondErrorDescription, file: FilePondFile, _status?: any) =>
                                onError && onError(error, file)
                            }
                            labelIdle={
                                multiple
                                    ? 'Dosyaları sürükleyip bu alana bırakın ya da <span> class="filepond--label-action">Dosya Seçin</span>'
                                    : 'Dosyayı sürükleyip bu alana bırakın ya da <span class="filepond--label-action">Dosya Seçin </span>'
                            }
                        />
                    )}
                />
            </div>
            {(Boolean(getMessage(errors, name)) || helperText) && (
                <FormHelperText id="component-error-text">{getMessage(errors, name) || helperText}</FormHelperText>
            )}
        </FormControl>
    );
};

export default Upload;
