import { FC, memo } from "react";
import { IViewProps } from "./type";


const View:FC<IViewProps> = ({show,children}) => {
    return show? children:null
}

View.defaultProps = {
    show :false,
}

export default memo(View)