import { GridProps } from "@mui/material";
import { INavContainerProps, INavTitleProps } from "../Nav/type";


export interface IGridProps extends Omit<GridProps,'classes'|'color'|'fontFamily'>{
}


export interface IGridItemTitleProps extends INavTitleProps, Pick<INavContainerProps,'small'>{}