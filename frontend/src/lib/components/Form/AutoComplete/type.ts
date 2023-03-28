import { TextFieldProps, AutocompleteProps } from "@mui/material";
import { IData } from "../Select/type";
import { ReactNode } from "react";
import { ICommonFieldProps } from "../../../_constants/commonTypes";

export interface IAutocompleteProps
  extends Pick<
      TextFieldProps,
      | "autoComplete"
      | "autoFocus"
      | "className"
      | "color"
      | "disabled"
      | "fullWidth"
      | "id"
      | "inputRef"
      | "label"
      | "multiline"
      | "onBlur"
      | "onFocus"
      | "onKeyPress"
      | "placeholder"
      | "ref"
      | "required"
      | "sx"
    >,
    Omit<ICommonFieldProps, "startAdornment" | "endAdornment">,
    Pick<AutocompleteProps<any, any, any, any>, "componentsProps"> {
  closeText?: string;
  disableCloseOnSelect?: boolean;
  groupPath?: string;
  loadingText?: ReactNode;
  multiple?: boolean;
  noOptionsDataText?: string;
  open?: boolean;
  openText?: string;
  options: IData;
  popupIcon?: ReactNode;
  disablePopupIconRotate?: boolean;
  variant?: string;
  hidden?: boolean;
}
