import { DialogActions } from "@mui/material";
import { FC, forwardRef } from "react";
import {  IModalFooterProps } from "./type";


const ModalFooter: FC<IModalFooterProps> = forwardRef(({children,...rest}: IModalFooterProps,ref) => {
    return(
        <DialogActions ref={ref} {...rest}>{children}</DialogActions>
    )
})

export default ModalFooter;