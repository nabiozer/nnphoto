import { BoxProps, GridProps } from "@mui/material";
import { IButtonProps } from "../../Form/Button/type";


export interface INavContainerProps extends Omit<GridProps, 'classes' | 'color'| 'fontFamily' > {
    stickyTop?:boolean;
    stickyBottom?:boolean;
    small?:boolean;
}

export interface INavRowProps extends  Omit<GridProps, 'classes' | 'color'| 'fontFamily' > {}

export interface INavItemProps extends Omit<GridProps, 'classes' | 'color'| 'fontFamily' > {}

export interface IBackButtonProps extends  Omit<IButtonProps, 'design' | 'type'| 'name' |'fullWidth'> {
    show?:boolean;
    tooltipTitle?:NonNullable<React.ReactNode>;
   
}

export interface INavTitleProps extends Pick<BoxProps,'sx'>{
    title: string;
    subTitle?:string;
    label?:string;
    backButtonProps?:IBackButtonProps;
    isView?:boolean;
}