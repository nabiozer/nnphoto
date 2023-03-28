import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { isBoolean, isNumber, isString, omit, uniqBy } from 'lodash';
import { useController } from 'react-hook-form';

import { KeyboardArrowDown } from '@mui/icons-material';
import { FC } from 'react';
import { IAutocompleteProps } from './type';
import { default as manageClassNames } from 'classnames'
import ThemeWrapper from '../../App/ThemeWrapper';



const Autocomplete: FC<IAutocompleteProps> = ({
    helperText,
    name,
    autoComplete,
    disabled,
    readOnly,
    required,
    label,
    hidden,
    autoFocus,
    open,
    noOptionsDataText,
    loadingText,
    disableCloseOnSelect,
    options,
    multiple,
    control,
    size,
    fullWidth,
    variant,
    onFocus,
    onKeyPress,
    onBlur,
    className,
    placeholder,
    popupIcon,
    openText = '',
    closeText = '',
    disablePopupIconRotate,
    componentsProps,
    ...rest
}: IAutocompleteProps) => {
    const {
        field: { ref, ...field },
        fieldState: { error },
    } = useController({ name, control });


    const renderInput = (params: any) => {
        return (
            <TextField
                {...params}
                placeholder={placeholder}
                name={field.name}
                inputRef={ref}
                size={size}
                label={label ? (required ? `${label} *` : label) : ''}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                variant={variant}
                error={Boolean(error)}
                helperText={error?.message || helperText}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyPress={onKeyPress}
            />
        );
    };


    return (
        <ThemeWrapper>
            <MuiAutocomplete
                {...field}
                options={uniqBy(options?.data, options?.displayValue || '')}
                getOptionLabel={(option: any) => {
                    if ((isString(option) || isNumber(option) || isBoolean(option)) && options?.data?.length && option) {
                        return options?.data?.filter(
                            (item: { [x: string]: string | number | boolean }) => item[options?.displayValue] === option,
                        )[0][options?.displayField];
                    }
                    return option[options?.displayField || ''] || '';
                }}
                clearOnEscape
                disableCloseOnSelect={multiple ? true : disableCloseOnSelect}
                open={open}
                openText={openText}
                closeText={closeText}
                multiple={multiple}
                fullWidth={fullWidth}
                noOptionsText={noOptionsDataText}
                popupIcon={popupIcon || <KeyboardArrowDown />}
                loadingText={loadingText}
                disabled={disabled}
                readOnly={readOnly}
                hidden={hidden}
                componentsProps={{
                    paper: {
                        className: manageClassNames('x', {
                            [`${className}__paper`]: Boolean(className),
                            [`${componentsProps?.paper?.className}`]: Boolean(componentsProps?.paper?.className),
                        }),
                        ...(componentsProps?.paper ? omit(componentsProps?.paper, ['className']) : {}),
                    },
                    popupIndicator: {
                        className: manageClassNames({
                            disablePopupIconRotate: disablePopupIconRotate,
                            [`${className}__popupIndicator`]: Boolean(className),
                            [`${componentsProps?.popupIndicator?.className}`]: Boolean(
                                componentsProps?.popupIndicator?.className,
                            ),
                        }),
                        ...(componentsProps?.popupIndicator ? omit(componentsProps?.popupIndicator, ['className']) : {}),
                    },
                    ...(componentsProps ? omit(componentsProps, ['paper', 'popupIndicator']) : {}),
                }}
                isOptionEqualToValue={(option, value) => {
                    return option[options?.displayValue || ''] === value;
                }}
                className={manageClassNames('x', { [`${className}`]: Boolean(className) })}
                renderInput={(params) => renderInput(params)}
                onChange={(_, newData) => {
                    multiple
                        ? field.onChange(newData?.map((item: any) => item[options?.displayValue] || item))
                        : field.onChange(newData ? newData[options?.displayValue || ''] : null);
                }}
                {...omit(rest, ['design', 'errors', 'labelWidth', 'labelPlacement'])}
            />
        </ThemeWrapper>
    );
};

Autocomplete.defaultProps = {
    autoComplete: 'off',
    disableCloseOnSelect: false,
    fullWidth: true,
    hidden: false,
    loadingText: 'Yükleniyor...',
    multiple: false,
    noOptionsDataText: 'Sonuç Bulunamadı',
    readOnly: false,
    size: 'small',
    variant: 'outlined'
}
export default Autocomplete;