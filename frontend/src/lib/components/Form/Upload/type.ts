import { SxProps, Theme } from '@mui/material';

import { FilePondErrorDescription, FilePondFile } from 'filepond';
import { UseFormReturnType } from '../../../_hooks/useForm';

import { ICommonFieldProps, IFormCommonControl } from '../commonTypes';

export interface IDocumentDetail {
    Extension: string;

    FileName: string;

    FolderId: string;

    Id: string;

    LatestVersion: any;

    Path: string;

    UserList: any;

    Size: number;
}

export interface IUploadDocument {
    DMSId: string;

    DocumentName: string;

    DocumentSize: number;

    DocumentPath: string;

    Date?: number;

    Version?: string;
}

export interface IUploadProps
    extends IFormCommonControl<any>,
        Omit<ICommonFieldProps, ''>,
        Required<Pick<UseFormReturnType<any>, 'setValue'>> {
    onError?: (err: FilePondErrorDescription, file?: FilePondFile) => void;

    onRemove?: (document: IUploadDocument) => void;

    onChange?: (document: IUploadDocument) => void;

    getPath?: (path: string) => void;

    label?: string;

    helperText?: string;

    button?: string;

    multiple?: boolean;

    destroy?: boolean;

    chunkUploads?: boolean;

    chunkForce?: boolean;

    acceptedFileTypes?: any[];

    chunkRetryDelays?: number[];

    allowImagePreview?: boolean;

    instantUpload?: boolean;

    maxSize?: number;

    chunkSize?: number;

    onRef?: (e: any) => void;

    id?: any;

    type?: string;

    path?: string;

    name: string;

    fileName?: string;

    apiUrl: string;

    token: string;

    errorText?: string;

    itemInsertLocation?: 'before' | 'after';

    sx?: SxProps<Theme>;

    required?: boolean;
}

export enum FileInsertLocationEnum {
    BEFORE = 'before',

    AFTER = 'after',
}

export enum FileGenerateTypeEnum {
    LOCAL = 0,

    FORM = 1,
}
