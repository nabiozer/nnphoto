import { SelectProps } from "@mui/material";
import { UseFormReturnType } from "../../../_hooks/useForm";

import { ICommonFieldProps } from "../commonTypes";
export interface IData {
  data: any[];
  displayValue: string;
  displayField: string;
}
export interface IOptionsData {
  options: IData;
}
export interface ISelectProps
  extends Pick<
      SelectProps,
      | "autoWidth"
      | "children"
      | "disabled"
      | "displayEmpty"
      | "inputRef"
      | "label"
      | "multiple"
      | "onBlur"
      | "onClose"
      | "onFocus"
      | "onKeyDown"
      | "onKeyUp"
      | "onOpen"
      | "open"
      | "required"
      | "renderValue"
      | "sx"
      | "className"
    >,
    IOptionsData,
    Omit<ICommonFieldProps, "endAdornment">,
    Required<Pick<UseFormReturnType<any>, "setValue">> {
  displayEmptyValue?: string;
  viewChip?: boolean;
  hiddenItems?: any[];
  disabledItems?: any[];
  errorText?: string;
  size?: any;
  labelActive?:any;
  autoFocus?:any;
  
  onChange?: (id: any) => void;
}
