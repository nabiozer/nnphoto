import { DialogContentProps, DialogProps, DialogTitleProps } from "@mui/material";
import { IButtonProps } from "../../Form/Button/type";



export enum ModalCloseReasonEnum {
    BackdropClick = 'backdropClick',
    EscapeKeyDownDown = 'escapeKeyDown',
    CloseIconClick = 'closeIconClick',
}


export type ModalCloseReasonType = `${ModalCloseReasonEnum}`;


export interface IModalProps extends 
Pick<DialogProps,'disableEscapeKeyDown' | 'fullScreen' | 'fullWidth' | 'maxWidth' | 'ref' | 'scroll'>,
Required<Pick<DialogProps,'children'>>,
Pick<IButtonProps,'loading'>{
    show:boolean,
    keepMounted?:any;
    closeIcon?:boolean;
    allowClose?:boolean;
    disableBackdropClick?:boolean;
    onBackdropClick?:() => void;
    onClose?:() => void;
}

export interface IModalTitleProps extends Pick<DialogTitleProps, 'ref' | 'sx'> {
    title:string;
}

export interface IModalBodyProps extends DialogContentProps {}
export interface IModalFooterProps extends DialogContentProps {}

