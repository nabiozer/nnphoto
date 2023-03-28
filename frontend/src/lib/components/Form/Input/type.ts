import { TextFieldProps } from "@mui/material";
import { FileExtentionsEnum } from "../../../_utility/_file/type";

import { ICommonFieldProps } from "../commonTypes";
export enum InputTypeEnum {
  File = "file",
  Password = "password",
  Hidden = "hidden",
}
export interface IInputProps
  extends Pick<
      TextFieldProps,
      | "autoComplete"
      | "disabled"
      | "id"
      | "inputRef"
      | "label"
      | "minRows"
      | "maxRows"
      | "multiline"
      | "onBlur"
      | "onChange"
      | "onFocus"
      | "placeholder"
      | "onKeyPress"
      | "ref"
      | "required"
      | "rows"
      | "size"
      | "sx"
    >,
    ICommonFieldProps {
  size?: any;
  maxLength?: number;
  minLength?: number;
  mask?: any;
  maskLazy?: boolean;
  type?: `${InputTypeEnum}`;
  maskChar?: "*" | "." | "," | "_" | "-";
  accept?: `${FileExtentionsEnum}`[];
}
