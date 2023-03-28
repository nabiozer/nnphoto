import { CheckboxProps } from "@mui/material";
import { ICommonFieldProps, IFormCommonControl } from "../commonTypes";

export interface ICheckboxProps
  extends Pick<ICommonFieldProps, "name" | "helperText" | "hidden" >,
    Pick<
      CheckboxProps,
      | "autoFocus"
      | "checkedIcon"
      | "color"
      | "disableRipple"
      | "disableTouchRipple"
      | "disabled"
      | "icon"
      | "inputRef"
      | "readOnly"
      | "ref"
      | "required"
      | "size"
      | "sx"
    >,
    IFormCommonControl<any> {
  label?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  labelWidth?: number;
}
