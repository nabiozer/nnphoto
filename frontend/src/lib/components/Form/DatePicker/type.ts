// import { DatePickerProps } from "@mui/x-date-pickers";
// import { TextFieldProps } from "@mui/material";
// import { ICommonFieldProps } from "../commonTypes";

// export interface IDatePickerProps
//   extends Pick<
//       DatePickerProps<any, any>,
//       | "autoFocus"
//       | "disabled"
//       | "disableHighlightToday"
//       | "disableMaskedInput"
//       | "disableOpenPicker"
//       | "disablePast"
//       | "inputFormat"
//       | "inputRef"
//       | "label"
//       | "loading"
//       | "mask"
//       | "maxDate"
//       | "minDate"
//       | "onClose"
//       | "onMonthChange"
//       | "onOpen"
//       | "onViewChange"
//       | "onYearChange"
//       | "renderDay"
//       | "shouldDisableDate"
//       | "shouldDisableYear"
//       | "views"
//     >,
//     Omit<ICommonFieldProps, "startAdornment" | "endAdornment">,
//     Pick<
//       TextFieldProps,
//       "placeholder" | "sx" | "onKeyPress" | "onFocus" | "onBlur"
//     > {
//   disableCloseOnSelect?: boolean;
//   clearable?: boolean | undefined;
//   clearText?: any;
//   required?: boolean;
//   unixTime?: boolean;
//   disableWeekends?: boolean;
// }

export enum DateTypeEnum {
  day = "day",
  month = "month",
  year = "year",
}
export type DateType = keyof typeof DateTypeEnum;
