import { FieldValues } from "react-hook-form";
import { UseFormReturnType } from "../../_hooks/useForm";


export interface IFormCommonControl<T extends FieldValues = any>
  extends Pick<UseFormReturnType<T>, "errors" | "control"> {}

export interface ICommonFieldProps extends IFormCommonControl {
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  helperText?: string;
  hidden?: boolean;
  id?: string;
  labelPlacement?: "top" | "start"; 
  labelWidth?: "auto" | number | string;
  name: string;
  readOnly?: boolean;
  size?: "small" | "medium";
  startAdornment?: React.ReactNode;
  tabIndex?: number;
  variant?: "standard" | "outlined" | "filled";
}

