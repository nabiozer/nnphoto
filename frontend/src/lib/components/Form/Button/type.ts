import { ButtonGroupProps,ButtonProps } from '@mui/material';
import React from 'react';




export interface IButtonProps  extends Pick<ButtonProps,
| 'className'| 'color'| 'disabled'| 'fullWidth'| 'href'| 'id'| 'name'| 'ref'| 'size'| 'sx'| 'variant'| 'type' >
{
    text?: string;
    loading?: boolean;
    onClick?: (e?: any) => void;
    icon?: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    rounded?: boolean;
    leftRounded?: boolean;
    rightRounded?: boolean;
    iconButton?: true;
   
}


export interface IButtonGroupProps extends Pick<ButtonGroupProps, 'children' | 'className' | 'disabled'| 'fullWidth' | 'ref' | 'orientation' | 'sx' >{}