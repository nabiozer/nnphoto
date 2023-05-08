import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { TextField, TextFieldProps } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { fromUnixTime, getUnixTime, isAfter, isDate, isValid } from "date-fns";
import trLocale from "date-fns/locale/tr";
import { isNumber, isUndefined } from "lodash";
import { FC, useEffect, useState } from "react";
import { useController } from "react-hook-form";
import ThemeWrapper from "../../App/ThemeWrapper";
import { pickerProps } from "../_helper";
import { DateTimeType, DateTimeTypeEnum } from "./type";

const DateTimePicker: FC<any> = ({
  label,
  required,
  disabled,
  helperText,
  name,
  control,
  variant,
  views,
  size,
  mask,
  inputFormat,
  fullWidth,
  unixTime,
  onClose,
  onOpen,
  onBlur,
  onFocus,
  onKeyPress,
  placeholder,
  labelPlacement,
  labelWidth,
  disableMaskedInput,
  ...rest
}: any) => {
  const dateSeparator = pickerProps.ERP.dateTimePicker.dateSeparator;
  const timeSeparator = pickerProps.ERP.dateTimePicker.timeSeparator;
  const [format, setFormat] = useState<string>(
    pickerProps.ERP.dateTimePicker.inputFormat
  );
  const [maskFormat, setMaskFormat] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const {
    field: { ref, ...field },
    fieldState: { error },
  } = useController({ name, control });

  const getInputDate = (value: any) => {
    if (unixTime) {
      return value ? fromUnixTime(value) : value;
    }
    return value;
  };
  /* istanbul ignore next */ const toggleOpen = (val?: boolean) => {
    if (val !== undefined) {
      val && !open && onOpen && onOpen();
      !val && open && onClose && onClose();
      setOpen(val);
    } else {
      !open && onOpen && onOpen();
      open && onClose && onClose();
      setOpen((prevState: any) => !prevState);
    }
  };
  const formatter = (val: string, index: number) => {
    if (val === "HH" || val === "mm" || val === "ss") {
      if (views) {
        if (
          views[index - 1] === DateTimeTypeEnum.day ||
          views[index - 1] === DateTimeTypeEnum.month ||
          views[index - 1] === DateTimeTypeEnum.year
        ) {
          val = ` ${val}`;
        }
        if (
          views[index + 1] === DateTimeTypeEnum.hours ||
          views[index + 1] === DateTimeTypeEnum.minutes ||
          views[index + 1] === DateTimeTypeEnum.seconds
        ) {
          val = `${val}${timeSeparator}`;
        }
        if (
          views[index + 1] === DateTimeTypeEnum.day ||
          views[index + 1] === DateTimeTypeEnum.month ||
          views[index + 1] === DateTimeTypeEnum.year
        ) {
          val = `${val} `;
        }
      }
    }
    if (val === "dd" || val === "MM" || val === "yyyy") {
      if (views) {
        if (
          views[index + 1] === DateTimeTypeEnum.day ||
          views[index + 1] === DateTimeTypeEnum.month ||
          views[index + 1] === DateTimeTypeEnum.year
        ) {
          val = `${val}${dateSeparator}`;
        }
      }
    }
    return val;
  };

  useEffect(() => {
    if (views?.length) {
      const formatArr: any[] = views?.map(
        (item: DateTimeType, index: number) => {
          if (item === DateTimeTypeEnum.day) {
            return formatter("dd", index);
          }
          if (item === DateTimeTypeEnum.month) {
            return formatter("MM", index);
          }
          if (item === DateTimeTypeEnum.year) {
            return formatter("yyyy", index);
          }
          if (item === DateTimeTypeEnum.hours) {
            return formatter("HH", index);
          }
          if (item === DateTimeTypeEnum.minutes) {
            return formatter("mm", index);
          }
          if (item === DateTimeTypeEnum.seconds) {
            return formatter("ss", index);
          }
          return null;
        }
      );
      const formatString = formatArr.join("");
      setFormat(formatString);
      setMaskFormat(formatString.replace(/[a-z]/gi, "_"));
    }
    //eslint-disable-next-line
  }, [views]);

  const placeholderFormat = (data: string | undefined) => {
    let formatData = data;
    if (!isUndefined(formatData)) {
      if (formatData.includes("EEEE")) {
        formatData = formatData.replace("EEEE", "gün");
      }
      if (formatData.includes("MMMM")) {
        formatData = formatData.replace("MMMM", "aaaa");
      }
      if (formatData.includes("dd")) {
        formatData = formatData.replace("dd", "gg");
      }
      if (formatData.includes("MM")) {
        formatData = formatData.replace("MM", "aa");
      }
      if (formatData.includes("HH")) {
        formatData = formatData.replace("HH", "ss");
      }
      if (formatData.includes("mm")) {
        formatData = formatData.replace("mm", "dd");
      }
    } else {
      formatData = `gg${dateSeparator}aa${dateSeparator}yyyy ss${timeSeparator}dd`;
    }
    return formatData;
  };
  const setOpenTo = () => {
    if (views) {
      if (views[0] === DateTimeTypeEnum.year) return DateTimeTypeEnum.year;
      if (views[0] === DateTimeTypeEnum.month) return DateTimeTypeEnum.month;
      if (views[0] === DateTimeTypeEnum.hours) return DateTimeTypeEnum.hours;
      if (views[0] === DateTimeTypeEnum.minutes)
        return DateTimeTypeEnum.minutes;
      if (views[0] === DateTimeTypeEnum.seconds)
        return DateTimeTypeEnum.seconds;
      return DateTimeTypeEnum.day;
    }
    return DateTimeTypeEnum.day;
  };
  const minDateControl = (date: any) => {
    return isAfter(
      isNumber(date) ? fromUnixTime(date) : date,
      new Date(1900, 1, 1)
    );
  };

  const renderInput = (params: TextFieldProps) => {
    const errorVal =
      Boolean(error) || (params.error && params?.inputProps?.value?.length > 0);
    const helperTextVal =
      ((params.error || !minDateControl(field.value)) &&
        params?.inputProps?.value?.length > 0 &&
        "") ||
      error?.message ||
      helperText ||
      "";
    return (
      <TextField
        {...params}
        inputProps={{
          ...params.inputProps,
          ...(placeholder
            ? { placeholder: placeholder }
            : { placeholder: placeholderFormat(views ? format : inputFormat) }),
        }}
        autoFocus={false}
        label={label ? (required ? `${label} *` : label) : ""}
        autoComplete="off"
        fullWidth={fullWidth}
        disabled={disabled}
        multiline={false}
        spellCheck={false}
        size={size}
        variant={variant}
        error={errorVal}
        helperText={helperTextVal}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
      />
    );
  };

  return (
    <ThemeWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={trLocale}>
        <MuiDateTimePicker
          {...field}
          //eslint-disable-next-line

          value={getInputDate(field?.value)}
          components={{
            OpenPickerIcon: () => <EventOutlinedIcon fontSize={size} />,
          }}
          InputAdornmentProps={{ position: "end" }}
          ampm={false}
          disabled={disabled}
          disableCloseOnSelect
          open={open}
          onOpen={() => toggleOpen()}
          onClose={() => toggleOpen(false)}
          OpenPickerButtonProps={{ onClick: () => toggleOpen() }}
          InputProps={{
            ...(disableMaskedInput && {
              onKeyDown: (e: any) => e.preventDefault(),
            }),
          }}
          disableMaskedInput={disableMaskedInput}
          onChange={(date: any, keyboardInputValue: any) => {
            let d = null;
            if (isDate(date) && isValid(date) && minDateControl(date)) {
              d = unixTime ? Number(getUnixTime(new Date(date))) : date;
            }
            const inputEmpty = !d && !keyboardInputValue && !open;
            const pickerChange = open && !keyboardInputValue && d;
            if (keyboardInputValue || pickerChange || inputEmpty) {
              let resultD = d;
              if (d === null) {
                resultD = inputEmpty ? null : NaN;
              }
              field.onChange(resultD);
            }
          }}
          {...(views ? { views: views } : {})}
          openTo={setOpenTo()}
      
          inputFormat={
            views
              ? format
              : inputFormat ||
              `dd${dateSeparator}MM${dateSeparator}yyyy HH${timeSeparator}mm`
          }
          mask={
            views
              ? maskFormat
              : mask ||
              `__${dateSeparator}__${dateSeparator}____ __${timeSeparator}__`
          }
          renderInput={(params: any) => {
            return renderInput(params);
          }}
          {...rest}
          inputRef={ref}
          fullWidth={fullWidth}
        />
      </LocalizationProvider></ThemeWrapper>
  );
};

DateTimePicker.defaultProps = {
  autoFocus: false,
  clearable: false,
  disableCloseOnSelect: false,
  fullWidth: true,
  hidden: false,
  labelPlacement: 'start',
  readOnly: false,
  required: false,
  showTodayButton: false,
  size: 'small',
  unixTime: false,
}
export default DateTimePicker;
