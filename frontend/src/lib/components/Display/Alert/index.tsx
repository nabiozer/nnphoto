import ThemeWrapper from "../../App/ThemeWrapper";
import { IAlertProps } from "./type";
import {Alert as MuiAlert, AlertTitle} from '@mui/material'
import { FC } from "react";

const Alert :FC<IAlertProps> = ({title,text,type,action,onClose,icon,...rest}) => {

    const handleClose = () =>{
        onClose && onClose(false);
    }
    return (
        <ThemeWrapper>
            <MuiAlert {...rest} icon={icon} onClose={onClose && handleClose} severity={type} action={action}>
                <AlertTitle>{title}</AlertTitle>
                {text}
            </MuiAlert>
        </ThemeWrapper>
    )
}

Alert.defaultProps = {
    variant: 'standard',
    type:'success'
}


export default Alert;