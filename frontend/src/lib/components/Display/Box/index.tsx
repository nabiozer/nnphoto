import { Box as MuiBox } from "@mui/material";
import { FC, forwardRef } from "react";
import { IBoxProps } from "./type";



const Box: FC<IBoxProps> = forwardRef(({children,...rest}:IBoxProps,ref) => {
    return (
        <MuiBox ref={ref} {...rest}>
            {children}
        </MuiBox>
    )
})


export default Box