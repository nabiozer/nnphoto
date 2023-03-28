import { IButtonGroupProps } from "../Button/type";
import { ButtonGroup as MuiButtonGroup } from "@mui/material";
import { FC } from "react";


const ButtonGroup: FC<IButtonGroupProps> = ({ children, ...rest }: IButtonGroupProps) => {
    return <MuiButtonGroup {...rest}>{children}</MuiButtonGroup>
}

export default ButtonGroup;