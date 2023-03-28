import { FC } from "react";
import { IContainerProps } from "./type";
import { Container as MuiContainer } from "@mui/material";



const Container: FC<IContainerProps> =({children,...rest}:IContainerProps) => {
    return <MuiContainer {...rest}>{children}</MuiContainer>
}

export default Container