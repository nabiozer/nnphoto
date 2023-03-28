import { FC } from 'react';
import { useController } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select as MuiSelect } from '@mui/material';


import { isBoolean, isNumber, isUndefined, isNull } from 'lodash';
import { CloseRounded } from '@mui/icons-material';
import { ISelectProps } from './type';
import useWatch from '../../../_hooks/useWatch';
import Box from '../../Display/Box';
import { SelectMenuProps } from '../_helper';
import ThemeWrapper from '../../App/ThemeWrapper';
const Select: FC<ISelectProps> = ({
    helperText,
    name,
    id = uuidv4(),
    label,
    displayEmpty,
    startAdornment,
    options,
    hiddenItems,
    disabledItems,
    renderValue,
    onChange,
    control,
    required,
    disabled,
    setValue,
    size,
    fullWidth,
    variant,
    multiple,
    readOnly,
    labelPlacement,
    labelWidth,
    className,
    ...rest }: ISelectProps) => {
    const {
        field: { ref, ...field },
        fieldState: { error },
    } = useController({ name, control });
    const watchVal = useWatch({ control, fieldName: name });
    const getMultipleCustomRender = (selected: any, data: any[], displayValue: string, displayField: string) => {
        const showStr: any[] = [];
        data && data.length && selected && selected.length && selected.forEach((a: any) => {
            const x: any = data.filter((item: any) => item[displayValue] === a)[0];
            if (x) {
                showStr.push(x[displayField]);
            }
        });
        const selectedControl = selected || selected === false || selected === 0;
        const selectedField: any = selectedControl && data?.filter((item: any) => item[displayValue] === selected)[0];
        return multiple ? (showStr as string[]).join(', ') : selectedField[displayField];
    };
    const renderItems = () => {
        if (options?.data && options?.data.length) {
            return options?.data.map((item: any, i: number) => {
                const hidden = hiddenItems && hiddenItems?.length > 0 && hiddenItems.indexOf(item[options?.displayValue]) > -1;
                return (
                    !hidden && (
                        <MenuItem
                            key={`single_select_${String(i)}`}
                            value={item[options?.displayValue]}
                            className='x'
                            onClick={() => onChange && onChange(item[options?.displayValue])}
                            disabled={
                                disabledItems && disabledItems?.length > 0 && disabledItems.indexOf(item[options?.displayValue]) > -1}>
                            {renderValue ? renderValue(item) : item[options?.displayField]}
                        </MenuItem>)
                );
            });
        }
        return null;
    };
    const getEndAdornObj = () => {
        if (
            displayEmpty && !disabled && !readOnly && (multiple ? watchVal.length : !isUndefined(watchVal) && (isBoolean(watchVal) || isNumber(watchVal))
                ? true : watchVal)
        ) {
            return {
                endAdornment: (
                    <CloseRounded className={`select-svg ${'x'}`}
                        onClick={() => {
                            setValue(
                                name,
                                multiple ? []
                                    : isNull(control._defaultValues[name]) || isNumber(control._defaultValues[name])
                                        ? null : '',
                            );
                            field.onChange(
                                multiple ? []
                                    : isNull(control._defaultValues[name]) || isNumber(control._defaultValues[name])
                                        ? null : '',
                            );
                            onChange && onChange(null);
                        }}
                    />),
            };
        }
        return {};
    };
    return (
        <ThemeWrapper>
        <FormControl variant={variant}
            disabled={disabled}
            error={Boolean(error)}
            size={size}
            fullWidth={fullWidth}
            className={'x'}>
            <InputLabel className={'x'} htmlFor={id}>
                {label}
                {required && ' *'}
            </InputLabel>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <MuiSelect
                    {...field}
                    inputRef={ref}
                    variant={variant}
                    className={`${'x'} ${className || ''} select-input-base`}
                    value={field.value === false ? false : field.value === 0 ? 0 : field.value || ''}
                    label={label ? (required ? `${label} *` : label) : ''}
                    size={size}
                    fullWidth={fullWidth}
                    displayEmpty={!displayEmpty}
                    readOnly={readOnly}
                    multiple={multiple}
                    onClose={(e: any) => {
                        setTimeout(() => {
                            (document.activeElement as HTMLElement).blur();
                        }, 0);
                    }}
                    {...getEndAdornObj()}
                    MenuProps={{
                        ...SelectMenuProps,
                        PaperProps: { className: 'x' },
                    }}
                    {...(multiple && {
                        renderValue: (selected: any) => {
                            return getMultipleCustomRender(
                                selected,
                                options?.data,
                                options?.displayValue,
                                options?.displayField,
                            );
                        },
                    })}
                    {...(startAdornment ? {
                        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
                    }
                        : {})}
                    {...rest}>
                    {renderItems()}
                </MuiSelect>
                {(error?.message || helperText) && (
                    <FormHelperText
                        className="custom-helper-text select">
                        {error?.message || helperText}
                    </FormHelperText>)}
            </Box>
        </FormControl>
        </ThemeWrapper>);
}

Select.defaultProps = {
    disabled:false,
    displayEmpty:false,
    fullWidth:false,
    hidden:false,
    labelPlacement:'start',
    readOnly:false,
    required:false,
    size:'small',
    variant:'outlined'
}
export default Select;