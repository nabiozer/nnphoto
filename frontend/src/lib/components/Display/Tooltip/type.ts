import { PopperProps, TooltipProps } from "@mui/material";



export interface ITooltipProps extends  Pick<TooltipProps, 'title' | 'componentsProps' | 'children' | 'placement' | 'arrow' | 'followCursor' | 'sx'>,
Pick<PopperProps,'keepMounted'> {
    show?:boolean | undefined;
    className?:string;
}