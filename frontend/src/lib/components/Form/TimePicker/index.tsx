import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { TextField, TextFieldProps } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import { fromUnixTime, getUnixTime, isAfter, isDate, isValid } from 'date-fns';
import trLocale from 'date-fns/locale/tr';
import { isNumber, isUndefined } from 'lodash';
import { FC, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import ThemeWrapper from '../../App/ThemeWrapper';
import { pickerProps } from '../_helper';
import { TimeType, TimeTypeEnum } from './type';

const TimePicker: FC<any> = ({
    label,
    required,
    disabled,
    helperText,
    name,
    control,
    views,
    variant,
    size,
    mask,
    fullWidth,
    unixTime,
    onClose,
    onOpen,
    onKeyPress,
    onBlur,
    onFocus,
    placeholder,
    labelPlacement,
    labelWidth,
    inputFormat,
    disableMaskedInput,
    ...rest }: any) => {
    const separator = pickerProps.ERP.timePicker.timeSeparator;
    const [format, setFormat] = useState<string>(pickerProps.ERP.timePicker.inputFormat);
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
    /* istanbul ignore next */    const toggleOpen = (val?: boolean) => {
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
    useEffect(() => {
        if (views?.length) {
            const formatArr: any[] = views?.map((item: TimeType) => {
                if (item === TimeTypeEnum.hours) {
                    return 'HH';
                }
                if (item === TimeTypeEnum.minutes) {
                    return 'mm';
                }
                if (item === TimeTypeEnum.seconds) {
                    return 'ss';
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
            if (formatData.includes('HH')) {
                formatData = formatData.replace('HH', 'ss');
            }
            if (formatData.includes('mm')) {
                formatData = formatData.replace('mm', 'dd');
            }
        } else {
            formatData = `ss${separator}mm`;
        }
        return formatData;
    };
    const setOpenTo = () => {
        if (views) {
            if (views[0] === TimeTypeEnum.minutes) return TimeTypeEnum.minutes;
            if (views[0] === TimeTypeEnum.seconds) return TimeTypeEnum.seconds;
            return TimeTypeEnum.hours;
        }
        return TimeTypeEnum.hours;
    };
    const minDateControl = (date: any) => {
        return isAfter(isNumber(date) ? fromUnixTime(date) : date, new Date(1900, 1, 1));
    };
    const renderInput = (params: TextFieldProps) => {
        const errorVal = Boolean(error) || (params.error && params?.inputProps?.value?.length > 0);
        const helperTextVal = ((params.error || !minDateControl(field.value)) && params?.inputProps?.value?.length > 0 && '') || error?.message || helperText || '';
        return (
            <TextField                {...params}
                inputProps={{
                    ...params.inputProps,
                    ...(placeholder ? { placeholder: placeholder }
                        : { placeholder: placeholderFormat(views ? format : inputFormat) }),
                }}
                autoFocus={false}
                label={label ? (required ? `${label} *` : label) : ''}
                autoComplete="off" fullWidth={fullWidth}
                size={size}
                disabled={disabled}
                multiline={false}
                spellCheck={false}
                variant={variant}
                error={errorVal}
                helperText={helperTextVal}
            />);
    };
    return (
        <ThemeWrapper>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={trLocale}>            <MuiTimePicker                {...field}
             
                value={getInputDate(field?.value)}
                components={{
                    OpenPickerIcon: () => <AccessTimeOutlinedIcon fontSize={size} />,
                }}
                InputAdornmentProps={{
                    position: 'end',
                }}
                ampm={false}
                disabled={disabled}
                disableCloseOnSelect open={open}
                onOpen={() => toggleOpen()}
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
                inputFormat={views ? format : inputFormat || `HH${separator}mm`}
                mask={views ? maskFormat : mask || `__${separator}__`}
                {...(views ? { views: views } : {})}
                openTo={setOpenTo()}
                renderInput={(params: any) => {
                    return renderInput(params);
                }}
                {...rest}
                inputRef={ref}
            />   </LocalizationProvider>
        </ThemeWrapper>);
};

TimePicker.defaultProps = {
    fullWidth: true,
    hidden:false,
    labelPlacement:'start',
    readOnly:false,
    required:false,
    size:'small',
    unixTime:false,
}
export default TimePicker;