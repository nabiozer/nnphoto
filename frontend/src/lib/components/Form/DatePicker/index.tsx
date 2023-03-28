import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import { TextField, TextFieldProps } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { fromUnixTime, getUnixTime, isAfter, isDate, isValid, isWeekend } from 'date-fns';
import trLocale from 'date-fns/locale/tr';
import { FC, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { DateType, DateTypeEnum } from './type';

import { isNumber, isUndefined } from 'lodash';
import ThemeWrapper from '../../App/ThemeWrapper';
import { pickerProps } from '../_helper';

const DatePicker: FC<any> = ({
    label,
    required,
    disabled,
    helperText,
    name,
    control,
    disableWeekends,
    shouldDisableDate,
    variant,
    size,
    mask,
    inputFormat,
    fullWidth,
    unixTime,
    views,
    onClose,
    onOpen,
    onBlur,
    onFocus,
    onKeyPress,
    placeholder,
    labelPlacement,
    labelWidth,
    disableMaskedInput,
    autoFocus,
    ...rest
}: any) => {
    const separator = pickerProps.ERP.datePicker.dateSeparator;
    const [format, setFormat] = useState<string>(pickerProps.ERP.datePicker.inputFormat);
    const [maskFormat, setMaskFormat] = useState<string>('');
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


    useEffect(() => {
        if (views?.length) {
            const formatArr: any[] = views?.map((item: DateType) => {
                if (item === DateTypeEnum.day) {
                    return 'dd';
                }
                if (item === DateTypeEnum.month) {
                    return 'MM';
                }
                if (item === DateTypeEnum.year) {
                    return 'yyyy';
                }
                return null;
            });
            setFormat(formatArr.join(`${separator}`));
            setMaskFormat(formatArr.join(`${separator}`).replace(/[a-z]/gi, '_'));
        }
        //eslint-disable-next-line
    }, [views]);


    const placeholderFormat = (data: string | undefined) => {
        let formatData = data;
        if (!isUndefined(formatData)) {
            if (formatData.includes('EEEE')) {
                formatData = formatData.replace('EEEE', 'gün');
            }
            if (formatData.includes('MMMM')) {
                formatData = formatData.replace('MMMM', 'aaaa');
            }
            if (formatData.includes('MM') || formatData.includes('mm')) {
                formatData = formatData.replace('MM', 'aa');
                formatData = formatData.replace('mm', 'aa');
            }
            if (formatData.includes('dd')) {
                formatData = formatData.replace('dd', 'gg');
            }
        } else {
            formatData = `gg${separator}aa${separator}yyyy`;
        }
        return formatData;
    };


    const setOpenTo = () => {
        if (views) {
            if (views[0] === DateTypeEnum.year) return DateTypeEnum.year;
            if (views[0] === DateTypeEnum.month) return DateTypeEnum.month;
            return DateTypeEnum.day;
        }
        return DateTypeEnum.day;
    };


    /* istanbul ignore next */
    const toggleOpen = (val?: boolean) => {
        if (val !== undefined) {
            val && !open && onOpen && onOpen();
            !val && open && onClose && onClose();
            setOpen(val);
        } else {
            !open && onOpen && onOpen();
            open && onClose && onClose();
            setOpen(!open);
        }
    };


    const unSelectableWeekends = (date: any) => {
        return isWeekend(date);
    };


    const minDateControl = (date: any) => {
        return isAfter(isNumber(date) ? fromUnixTime(date) : date, new Date(1900, 1, 1));
    };


    const renderInput = (params: TextFieldProps) => {
        const errorVal = Boolean(error) || (params.error && params?.inputProps?.value?.length > 0);
        const helperTextVal =
            ((params.error || !minDateControl(field.value)) && params?.inputProps?.value?.length > 0 && '') ||
            error?.message ||
            helperText ||
            '';
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
                label={`${label ? (required ? `${label} *` : label) : ''}`}
                autoComplete="off"
                fullWidth={fullWidth}
                disabled={disabled}
                multiline={false}
                spellCheck={false}
                variant={variant}
                size={size}
                error={errorVal}
                helperText={helperTextVal}
                onKeyPress={onKeyPress}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        );
    };


    return (
        <ThemeWrapper>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={trLocale}>
                <MuiDatePicker
                    {...field}

                    value={getInputDate(field?.value)}
                    components={{
                        OpenPickerIcon: () => <EventOutlinedIcon />,
                    }}
                    InputAdornmentProps={{ position: 'end' }}
                    PaperProps={{
                        className: `custom-picker ${'x'}`,
                    }}
                    shouldDisableDate={(disableWeekends && unSelectableWeekends) || shouldDisableDate}
                    autoFocus={autoFocus}
                    disableCloseOnSelect
                    open={open}
                    onOpen={
                    /* istanbul ignore next */ () => {
                            toggleOpen();
                        }
                    }
                    onClose={() => toggleOpen(false)}
                    OpenPickerButtonProps={{
                        onClick: () => toggleOpen(),
                    }}
                    InputProps={{
                        ...(disableMaskedInput && { onKeyDown: (e: any) => e.preventDefault() }),
                    }}
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
                    disableMaskedInput={disableMaskedInput}
                    disabled={disabled}
                    inputFormat={views ? format : inputFormat || `dd${separator}MM${separator}yyyy`}
                    mask={views ? maskFormat : mask || `_${separator}${separator}_`}
                    views={views}
                    openTo={setOpenTo()}
                    renderInput={(params: any) => {
                        return renderInput(params);
                    }}
                    {...rest}
                    inputRef={ref}
                />
            </LocalizationProvider>
        </ThemeWrapper>
    );
};

DatePicker.defaultProps = {
    autoFocus: false,
    clearable: false,
    disableCloseOnSelect: false,
    disableWeekends: false,
    fullWidth: true,
    hidden: false,
    labelPlacement: 'start',
    readOnly: false,
    required: false,
    size: 'small',
    unixTime: false
}

export default DatePicker;