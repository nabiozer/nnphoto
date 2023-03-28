import { FC } from 'react';
import { FormControl, FormHelperText, FormControlLabel, Radio as MuiRadio } from '@mui/material';
import { IRadioProps } from './type';
import { manageClassNames } from '../../../_utility/utiliy';
import ThemeWrapper from '../../App/ThemeWrapper';



const Radio: FC<IRadioProps> = ({
    helperText,
    disabled,
    checkedIcon,
    icon,
    label,
    color,
    value,
    size,
    required,
    className,
    ...rest }: IRadioProps) => {
    return (
        <ThemeWrapper>
            <FormControl className="radio-form-control" disabled={disabled} size={size}>            <FormControlLabel disabled={disabled}
                value={value}
                label={label ? (required ? `${label} *` : label) : ''}
                className={manageClassNames('custom-radio-label','x')}
                control={
                    <MuiRadio className={'x'}
                        color={color}
                        disabled={disabled}
                        inputProps={{ 'aria-label': label, role: 'radio' }}
                        size={size}
                        icon={icon}
                        checkedIcon={checkedIcon}
                        {...rest}
                    />}
            />            {helperText && (
                <FormHelperText className={manageClassNames('custom-helper-text', 'radio', 'x', `${size}`)}>
                    {helperText}
                </FormHelperText>)}
            </FormControl>
        </ThemeWrapper>);
};

Radio.defaultProps = {
    color: 'secondary',
    disabled: false,
    required: false,
    size: 'small'
}

export default Radio;