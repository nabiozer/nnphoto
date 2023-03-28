import { FC } from 'react';
import { useController } from 'react-hook-form';
import { FormControl, FormHelperText, FormLabel, RadioGroup as MuiRadioGroup } from '@mui/material';
import { IRadioGroupProps } from './type';
import ThemeWrapper from '../../App/ThemeWrapper';

import { isNumber } from 'lodash';
import { manageClassNames } from '../../../_utility/utiliy';
const RadioGroup: FC<IRadioGroupProps> = ({
    helperText,
    name,
    label,
    labelPlacement = 'start',
    labelWidth,
    control,
    children,
    sx,
    ...rest }: IRadioGroupProps) => {
    const {
        field,
        fieldState: { error },
    } = useController({ name, control });
    return (
        <ThemeWrapper>
            <FormControl className={manageClassNames(
                'radio-group-form-control',
                { 'label-active': Boolean(label) },
                `radio-group-labelPlacement-${labelPlacement}`,
                { [`${labelWidth}`]: Boolean(labelWidth), },)}
                error={Boolean(error)} fullWidth sx={sx}>
                {label && (<FormLabel sx={{
                    width:
                        /* istanbul ignore next */
                        labelPlacement === 'top' ? labelWidth || '100%' : labelWidth || `var(--field-label-width-x)`,
                }} className={`custom-radio-group-label x`}>
                    {label} </FormLabel>)}  <MuiRadioGroup {...field} {...rest}> {children}
                </MuiRadioGroup>
                {(error || helperText) && (<FormHelperText sx={{
                    marginLeft: /* istanbul ignore next */
                        label && labelPlacement === 'start' ? labelWidth ? isNumber(labelWidth) ? `${labelWidth}px !important` : `${labelWidth} !important` : `var(--field-label-width-x) !important` : '0',
                }} className={`custom-helper-text radio-group x`}>
                    {error?.message || helperText} </FormHelperText>)}
            </FormControl>
        </ThemeWrapper>);
};

export default RadioGroup;









