import { TypographyProps } from "@mui/material";

export enum ProgressTypeEnum {
  linear = "linear",
  circular = "circular",
}

export interface IProgressLabel extends Pick<TypographyProps, "color"> {
  fontSize?: number;
  fontWeight?: number;
}

export interface IProgressProps extends Pick<TypographyProps, "color"> {
  type: keyof typeof ProgressTypeEnum;
  label?: boolean | IProgressLabel;
  value?: number;
  thickness?: number;
  rounded?: boolean;
}
