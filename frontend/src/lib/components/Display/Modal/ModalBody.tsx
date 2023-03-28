import { DialogContent } from "@mui/material";
import { FC, forwardRef } from "react";
import { IModalBodyProps } from "./type";


const ModalBody: FC<IModalBodyProps> = forwardRef(({children,...rest}: IModalBodyProps,ref) => {
    return(
        <DialogContent ref={ref} {...rest}>{children}</DialogContent>
    )
})

export default ModalBody;