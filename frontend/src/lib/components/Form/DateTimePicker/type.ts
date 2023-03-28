// import { DateTimePickerProps } from "@mui/x-date-pickers";
// import { TextFieldProps } from "@mui/material";
// import { ICommonFieldProps } from "../commonTypes";
// export interface IDateTimePickerProps
//   extends Pick<
//       DateTimePickerProps<any, any>,
//       | "ampmInClock"
//       | "autoFocus"
//       | "dateRangeIcon"
//       | "disabled"
//       | "disableHighlightToday"
//       | "disableMaskedInput"
//       | "disableOpenPicker"
//       | "disablePast"
//       | "disableIgnoringDatePartForTimeValidation"
//       | "hideTabs"
//       | "inputFormat"
//       | "inputRef"
//       | "label"
//       | "loading"
//       | "mask"
//       | "maxDate"
//       | "maxDateTime"
//       | "maxTime"
//       | "minDate"
//       | "minDateTime"
//       | "minTime"
//       | "minutesStep"
//       | "onClose"
//       | "onMonthChange"
//       | "onOpen"
//       | "onViewChange"
//       | "onYearChange"
//       | "renderDay"
//       | "shouldDisableDate"
//       | "shouldDisableTime"
//       | "shouldDisableYear"
//       | "timeIcon"
//       | "views"
//     >,
//     Omit<ICommonFieldProps, "startAdornment" | "endAdornment">,
//     Pick<
//       TextFieldProps,
//       "placeholder" | "sx" | "onKeyPress" | "onFocus" | "onBlur"
//     > {
//   clearable?: boolean | undefined;
//   clearText?: any;
//   disableCloseOnSelect?: boolean;
//   showTodayButton?: boolean | undefined;
//   todayText?: any;
//   required?: boolean;
//   unixTime?: boolean;
//   className?: string;
// }
export enum DateTimeTypeEnum {
  day = "day",
  month = "month",
  year = "year",
  hours = "hours",
  minutes = "minutes",
  seconds = "seconds",
}

export type DateTimeType = keyof typeof DateTimeTypeEnum;
