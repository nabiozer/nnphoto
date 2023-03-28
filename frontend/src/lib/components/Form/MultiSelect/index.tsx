import { v4 as uuidv4 } from 'uuid';
import { Select, MenuItem, FormControl, FormHelperText, InputLabel, Checkbox, ListItemText } from '@mui/material';
import { Controller } from 'react-hook-form';
import { getMessage, SelectBoxPoperProps } from '../_helper';
import { IMultiSelectFieldProps } from './type';
import { FC } from 'react';

const MultiSelect: FC<IMultiSelectFieldProps> = ({
    helperText,
    errorText,
    name,
    id = uuidv4(),
    className = '',
    size = 'large',
    disabled,
    readOnly,
    required,
    label,
    labelActive,
    hidden = false,
    autoFocus = false,
    options,
    hiddenItems,
    disabledItems,
    onChange,
    defaultValue,
    control,
    errors,
    ...rest
}: IMultiSelectFieldProps) => {
    const { data, displayValue, displayField } = options;

    const getMultipleCustomRender = (selected: any[], data: any[], displayValue: string, displayField: string) => {
        const showStr: any[] = [];

        data &&
            data.length &&
            selected &&
            selected.length &&
            selected.forEach((a: any) => {
                const x: any = data.filter((item: any) => item[displayValue] === a)[0];
                if (x) {
                    showStr.push(x![displayField]);
                }
            });
        return showStr.length ? (showStr as string[])!.join(', ') : selected;
    };
    const renderItems = () => {
        if (data?.length) {
            return data.map((item: any, index: number) => {
                return (
                    <MenuItem
                        key={`single_select_${index}`}
                        value={item[displayValue]}
                        disableGutters
                        dense
                        disabled={disabledItems && disabledItems?.length > 0 && disabledItems.indexOf(item[displayValue]) > -1}
                        hidden={hiddenItems && hiddenItems?.length > 0 && hiddenItems.indexOf(item[displayValue]) > -1}>
                        <Checkbox
                            color="default"
                            disableRipple
                            checked={control?._formValues[name]?.indexOf(item[displayValue]) > -1}
                            className={`custom-multi-select-item-checkbox`}
                        />
                        <ListItemText primary={item[displayValue]} className={`custom-multi-select-item-text`} />
                    </MenuItem>
                );
            });
        }
        return null;
    };
    return (
        <FormControl
            variant="outlined"
            error={!!getMessage(errors, name)}
            className={`custom-outlined-input ${size} ${className}`}
            disabled={disabled}
            required={required}
            fullWidth
            hidden={hidden}>
            <InputLabel htmlFor={id} {...(labelActive ? { shrink: true } : {})}>
                {label}
            </InputLabel>
            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    return (
                        <Select
                            {...field}
                            value={data?.length ? field.value : []}
                            label={label}
                            readOnly={readOnly}
                            autoFocus={autoFocus}
                            multiple={true}
                            onClose={() => field.onBlur()}
                            MenuProps={{
                                ...SelectBoxPoperProps,
                            }}
                            renderValue={(selected: any) => {
                                return getMultipleCustomRender(selected, data, displayValue, displayField);
                            }}
                            {...rest}>
                            {renderItems()}
                        </Select>
                    );
                }}
            />
            {(!!getMessage(errors, name) || helperText) && (
                <FormHelperText id="component-error-text">{getMessage(errors, name) || helperText}</FormHelperText>
            )}
        </FormControl>
    );
};

export default MultiSelect;
