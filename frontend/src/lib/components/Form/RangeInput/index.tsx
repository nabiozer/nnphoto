import { FC } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Slider } from '@mui/material';
import { IRangeInputProps } from './type';
import { useController } from 'react-hook-form';
import ThemeWrapper from '../../App/ThemeWrapper';
const RangeInput: FC<IRangeInputProps> = ({
    name,
    control,
    size,
    label,
    color = 'secondary',
    helperText,
    labelPlacement = 'start',
    orientation,
    sx,
    ...rest }) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, control });
    return (
        <ThemeWrapper >
            <FormControl
                fullWidth={orientation === 'vertical' ? false : true}
                className={'custom-slider'}
                size={size}
                error={Boolean(error)}
                sx={sx}>
                <FormControlLabel
                    label={label}
                    labelPlacement={labelPlacement}
                    className={`custom-slider-label x`}
                    control={<Slider
                        {...field}
                        size={size}
                        orientation={orientation}
                        color={color} {...rest} />
                    }
                />
                {(error?.message || helperText) && (
                    <FormHelperText
                        {...(labelPlacement === 'start' && label?.length && orientation !== 'vertical' && {
                            sx: { ml: '40px !important' },
                        })}
                        {...(labelPlacement === 'top' && orientation === 'vertical' && {
                            sx: { mt: '15px !important' },
                        })}
                        className={`custom-helper-text slider x`}>
                        {error?.message || helperText}
                    </FormHelperText>)}
            </FormControl>
        </ThemeWrapper>);
};
export default RangeInput;