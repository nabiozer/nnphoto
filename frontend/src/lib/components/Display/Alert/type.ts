import { AlertColor, AlertProps } from "@mui/material";
import { ReactNode } from "react";
import { ICommonFieldProps } from "../../../_constants/commonTypes";



export interface IAlertProps extends ICommonFieldProps,Pick<AlertProps,'action' | 'icon' | 'variant' |'sx' >{
    title?:string;
    text:ReactNode;
    type?:AlertColor;
    variant?:'standard' | 'outlined'|'filled';
    onClose?:(status:boolean) => void;
}