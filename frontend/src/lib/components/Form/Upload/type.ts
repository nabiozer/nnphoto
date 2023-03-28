import { FilePondErrorDescription, FilePondFile } from 'filepond';
import React from 'react';
import { ICommonForm } from '../../../_constants/commonTypes';



export interface IProps {
    children?: any;
    className?: string;
    title: React.ReactNode;
    width?: string | number;
    position: 'left' | 'top' | 'right';
}

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

export interface IUploadComponent extends ICommonForm {
    onError?: (err: FilePondErrorDescription, file?: FilePondFile) => void;
    onRemove?: (document: IUploadDocument) => void;
    onChange?: (document: IUploadDocument) => void;
    getPath?: (path: string) => void;
    className?: string;
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
    setValue: any;
    itemInsertLocation?: 'before' | 'after';
}

export enum FileInsertLocationEnum {
    BEFORE = 'before',
    AFTER = 'after',
}

export enum FileGenerateTypeEnum {
    LOCAL_FILE = 0,
    FORM_FILE = 1,
}
