import { DialogTitle } from "@mui/material";
import { FC, forwardRef } from "react";
import { IModalTitleProps } from "./type";


const ModalTitle: FC<IModalTitleProps> = forwardRef(({ title, ...rest }: IModalTitleProps, ref) => {
    return (
        <DialogTitle ref={ref} {...rest}>{title}</DialogTitle>
    )
})

export default ModalTitle;