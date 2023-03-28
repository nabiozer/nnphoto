// import { TimePickerProps } from "@mui/x-date-pickers";
// import { TextFieldProps } from "@mui/material";
// import { ICommonFieldProps } from "../commonTypes";
// export interface ITimePickerProps
//   extends Pick<
//       TimePickerProps<any, any>,
//       | "ampmInClock"
//       | "className"
//       | "disabled"
//       | "disableOpenPicker"
//       | "inputRef"
//       | "label"
//       | "minTime"
//       | "maxTime"
//       | "minutesStep"
//       | "onClose"
//       | "onOpen"
//       | "onViewChange"
//       | "shouldDisableTime"
//       | "views"

//     >,
//     Omit<ICommonFieldProps, "startAdornment" | "endAdornment">,
//     Pick<
//       TextFieldProps,
//       "placeholder" | "sx" | "onKeyPress" | "onFocus" | "onBlur"
//     > {
//   clearable?: boolean | undefined;
//   clearText?: any;
//   disableCloseOnSelect?: boolean | undefined;
//   required?: boolean;
//   unixTime?: boolean;
//   disableMaskedInput?: any;
//   inputFormat?: any;
//   mask?: any;
// }
export enum TimeTypeEnum {
  hours = "hours",
  minutes = "minutes",
  seconds = "seconds",
}
export type TimeType = keyof typeof TimeTypeEnum;
