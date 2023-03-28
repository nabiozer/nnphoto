import { RadioProps } from "@mui/material";
import { ICommonFieldProps } from "../commonTypes";

export interface IRadioProps
  extends Pick<
      RadioProps,
      | "checkedIcon"
      | "color"
      | "disabled"
      | "icon"
      | "id"
      | "size"
      | "sx"
      | "required"
    >,
    Pick<ICommonFieldProps, "helperText"> {
  label?: string;
  value: any;
  className?:any
}
