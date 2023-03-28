import { ListProps } from "@mui/material";
import { ReactNode } from "react";



export interface IKeyValueListItem {
    text:ReactNode;
    value:ReactNode;
    wrap?:boolean;
}



export interface IKeyValueListProps extends Pick<ListProps, 'sx'>{
    data: IKeyValueListItem[];
    wrap?:boolean;
}