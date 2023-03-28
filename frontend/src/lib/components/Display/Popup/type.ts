import { PaperProps, PopoverOrigin, PopoverPosition } from "@mui/material";
import { ReactNode } from "react";
import { ICommonFieldProps } from "../../../_constants/commonTypes";

export interface IPopUpProperty {
    anchorOrigin?:PopoverOrigin;
    transformOrigin?:PopoverOrigin;
    anchorPosition?:PopoverPosition;
}


export interface IPopUpProps extends ICommonFieldProps,Pick<PaperProps,'sx'>{
    anchorEl:JSX.Element,
    children:ReactNode,
    popupPosition?:IPopUpProperty,
    onOpen?:() => void,
    onClose?:() => void,
    tooltip?:string;
    tooltipPosition?: | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start'| 'top';
}


export const defaultAnchorPosition:IPopUpProperty = {
    anchorOrigin:{
        vertical:'bottom',
        horizontal:'center'
    },
    transformOrigin:{
        vertical:'top',
        horizontal:'center'
    }
}