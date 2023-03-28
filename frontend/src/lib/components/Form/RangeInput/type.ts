import { SliderProps } from "@mui/material";
import { ICommonFieldProps, IFormCommonControl } from "../commonTypes";
export interface IRangeInputProps
  extends IFormCommonControl<any>,
    Pick<
      SliderProps,
      | "color"
      | "components"
      | "disabled"
      | "disableSwap"
      | "marks"
      | "max"
      | "min"
      | "orientation"
      | "scale"
      | "step"
      | "sx"
      | "tabIndex"
      | "track"
      | "getAriaValueText"
      | "valueLabelDisplay"
      | "valueLabelFormat"
      | "className"
    >,
    Pick<
      ICommonFieldProps,
      "name" | "size" | "helperText" | "labelPlacement"
    > {
  label?: string;
}
