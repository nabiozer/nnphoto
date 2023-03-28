import { RatingProps } from "@mui/material";
import { ICommonFieldProps } from "../../../_constants/commonTypes";



export interface IRatingProps extends Pick<RatingProps, | 'color' | 'defaultValue' | 'disabled' | 'emptyIcon' | 'highlightSelectedOnly' | 'icon' |'max' | 'precision' | 'ref' | 'sx' | 'size'>,
Pick<ICommonFieldProps,'name' | 'readOnly' | 'id' > {
    color?:'primary' | 'secondary' | 'error' | 'info' | 'succes' | 'warning';
    value?:number
}