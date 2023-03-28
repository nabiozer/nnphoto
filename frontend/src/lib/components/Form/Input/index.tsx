import { InputAdornment, TextField } from '@mui/material';
import { useController } from 'react-hook-form';
import { IInputProps } from './type';
import { FC, useState } from 'react';

import { isUndefined } from 'lodash';
import TextMaskCustom from './MaskInput';
import ThemeWrapper from '../../App/ThemeWrapper';
const Input: FC<IInputProps> = ({
    name,
    control,
    helperText,
    autoComplete,
    startAdornment,
    endAdornment,
    maxLength,
    minLength,
    fullWidth,
    readOnly,
    type,
    mask,
    variant,
    size,
    label,
    labelPlacement,
    labelWidth,
    required,
    maskLazy,
    accept,
    placeholder,
    maskChar,
    ...rest }: IInputProps) => {
    const [maskView, setMaskView] = useState<boolean>(true);
    const {
        field: { ref, ...field },
        fieldState: { error },
    } = useController({ name, control });
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const renderMaskInput = () => {
        if (mask) {
            return {
                inputComponent: TextMaskCustom as any,
                inputProps: {
                    mask,
                    lazy: field.value && !isFocused ? false : maskView,
                    placeholderChar: maskChar,
                },
            };
        }
        return {};
    };
    return (
        <ThemeWrapper>
            <TextField
                {...field}
                inputRef={ref}
                variant={variant}
                type={String(type)}
                autoComplete={autoComplete}
                fullWidth={fullWidth}
                label={label ? (required ? `${label} *` : label) : ''}
                spellCheck={false}
                error={Boolean(error)}
                size={size}
                helperText={error?.message || helperText}
                placeholder={placeholder}
                InputLabelProps={{
                    ...(mask && {
                        shrink:
                            placeholder && (!field.value || field.value) && isFocused ? true : field.value && !isFocused ? true : !maskView,
                    }),
                }}
                onChange={
                /* istanbul ignore next */ (e: any) => {
                        const maskReplace: string = mask?.replace(/[a0_*.,-]/g, maskChar);
                        const value = e.target?.value;
                        field.onChange(value);
                        if (placeholder && isUndefined(maskLazy) && value === maskReplace) {
                            setMaskView(true);
                        } else if (placeholder && isUndefined(maskLazy) && value.length && value !== maskReplace) {
                            setMaskView(false);
                        } else if (placeholder && isUndefined(maskLazy) && !field.value) {
                            setMaskView(false);
                        }
                    }
                }
                onFocus={
                /* istanbul ignore next */ () => {
                        setIsFocused(true);
                        if (!placeholder && isUndefined(maskLazy)) {
                            setMaskView(false);
                        }
                    }
                }
                onBlur={
                /* istanbul ignore next */ () => {
                        const maskReplace: string = mask?.replace(/[a0_*.,-]/g, maskChar);
                        setIsFocused(false);
                        if (
                            (!placeholder || placeholder) && isUndefined(maskLazy) && (!field.value || maskReplace === field.value)
                        ) {
                            setMaskView(true);
                            field.onChange('');
                        }
                    }
                }
                InputProps={{
                    ...(startAdornment ? {
                        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
                    }
                        : {}),
                    ...(endAdornment ? {
                        endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
                    }
                        : {}),
                    readOnly,
                    type: String(type),
                    componentsProps: {
                        input: { accept: accept?.map(/* istanbul ignore next */(a: any) => `.${a}`)?.join(',') },
                    },
                    ...renderMaskInput(),
                }}
                inputProps={{
                    maxLength,
                    minLength,
                }}
                {...rest}
            /></ThemeWrapper>);
};

Input.defaultProps = {
    autoComplete: 'off',
    fullWidth:true,
    hidden:false,
    labelPlacement:'start',
    maskChar:'-',
    readOnly:false,
    size:'small',
    variant:'outlined'
}

export default Input;