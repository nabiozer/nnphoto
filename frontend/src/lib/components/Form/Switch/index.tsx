import { FC, useRef, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { FormControl, FormHelperText, FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { ISwitchProps } from './type';

import ThemeWrapper from '../../App/ThemeWrapper';
import { manageClassNames } from '../../../_utility/utiliy';

const Switch: FC<ISwitchProps> = ({
    helperText,
    name,
    disabled,
    required,
    hidden = false,
    label,
    control,
    size,
    color = 'secondary',
    
    labelPlacement = 'end',
    sx,
}: ISwitchProps) => {
    const labelRef: any = useRef();
    const [helperTextStyleWidth, setHelperTextStyleWidth] = useState(null);
    const {
        field,
        fieldState: { error },
    } = useController({ name, control });
    const sizeVal = size || ('x' === 'x' ? 'small' : size);
    /* istanbul ignore next */    useEffect(() => {
        if (labelRef) {
            if (labelPlacement === 'top' || labelPlacement === 'bottom') {
                setHelperTextStyleWidth(labelRef.current?.offsetWidth);
            }
        }
    }, [labelRef?.current?.offsetWidth, labelPlacement]);
    return (
        <ThemeWrapper>
            <FormControl variant="outlined"
                className={manageClassNames('switch-form-control', `switch-labelPlacement-${labelPlacement}`)}
                error={Boolean(error)}
                disabled={disabled}
                fullWidth size={sizeVal}
                hidden={hidden}
                sx={sx}>
                <FormControlLabel
                    ref={labelRef}
                    disabled={disabled}
                    hidden={hidden}
                    label={label ? (required ? `${label} *` : label) : ''}
                    labelPlacement={labelPlacement}
                    className={manageClassNames('custom-switch-label', `${'x'}`)}
                    control={
                        <MuiSwitch
                            {...field}
                            color={color}
                            size={sizeVal}
                            disabled={disabled}
                            required={required}
                            checked={field.value}
                            inputProps={{
                                'aria-label': label,
                                role: 'switch',
                            }}
                        />}
                />                {(error?.message || helperText) && (
                    <FormHelperText sx={{ width: `${helperTextStyleWidth}px` }}
                        className={manageClassNames('custom-helper-text', 'switch', `${'x'}`, `${size}`)}>
                        {error?.message || helperText}
                    </FormHelperText>)}
            </FormControl>
        </ThemeWrapper>);
};
Switch.defaultProps = {
    autoFocus: false,
    disableRipple: false,
    disabled: false,
    readOnly: false,
    required: false,
};
export default Switch;