import { INumberFieldProps } from './type';
import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { getMessage } from '../_helper';
import { InputAdornment, TextField } from '@mui/material';
import NumberFormatCustom from './NumberInput';

const NumberInput: FC<INumberFieldProps> = ({
    helperText,
    errorText,
    name,
    id = uuidv4(),
    autoComplete = 'off',
    className = '',
    size = 'large',
    disabled,
    readOnly,
    required,
    label,
    labelActive,
    hidden = false,
    autoFocus = false,
    startAdornment,
    endAdornment,
    format,
    control,
    errors,
    ...rest
}: INumberFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    type="text"
                    autoFocus={autoFocus}
                    label={label}
                    required={required}
                    autoComplete={autoComplete}
                    InputLabelProps={{
                        ...(labelActive ? { shrink: true } : {}),
                    }}
                    hidden={hidden}
                    fullWidth
                    disabled={disabled}
                    multiline={false}
                    spellCheck={false}
                    variant="outlined"
                    error={!!getMessage(errors, name)}
                    className={`custom-outlined-input ${size} ${className}`}
                    helperText={getMessage(errors, name) || helperText}
                    InputProps={{
                        ...(startAdornment
                            ? {
                                  startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
                              }
                            : {}),
                        ...(endAdornment
                            ? {
                                  endAdornment: <InputAdornment position="start">{endAdornment}</InputAdornment>,
                              }
                            : {}),
                        inputComponent: NumberFormatCustom as any,
                        inputProps: {
                            ...format,
                        },
                    }}
                    onChange={(e: any) => field.onChange(e.target.value)}
                    {...rest}
                />
            )}
        />
    );
};

export default NumberInput;
