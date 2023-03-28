import { FC, useRef, useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { Checkbox as MuiCheckbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';

import { manageClassNames } from '../../../_utility/utiliy';
import ThemeWrapper from '../../App/ThemeWrapper';
import { ICheckboxProps } from './type';

const Checkbox: FC<ICheckboxProps> = ({
  helperText,
  name,
  disabled,
  required,
  hidden,
  checkedIcon,
  icon,
  label,
  control,
  size,
  readOnly,
  color,
  labelPlacement,
  ...rest
}: ICheckboxProps) => {
  const labelRef: any = useRef();
  const [helperTextStyleWidth, setHelperTextStyleWidth] = useState(null);
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });


  /* istanbul ignore next */
  useEffect(() => {
    if (labelRef) {
      if (labelPlacement === 'top' || labelPlacement === 'bottom') {
        setHelperTextStyleWidth(labelRef.current?.offsetWidth);
      }
    }
  }, [labelRef?.current?.offsetWidth, labelPlacement]);


  return (
    <ThemeWrapper><FormControl
      variant="outlined"
      className={manageClassNames('checkbox-form-control', `checbox-labelPlacement-${labelPlacement}`)}
      error={Boolean(error)}
      disabled={disabled}
      fullWidth
      size={size}
      hidden={hidden}>
      <FormControlLabel
        ref={labelRef}
        disabled={disabled}
        hidden={hidden}
        labelPlacement={labelPlacement}
        label={label ? `${label}${required ? ' *' : ''}` : ''}
        className={manageClassNames('custom-checkbox-label', `${'x'}`)}
        control={
          <MuiCheckbox
            {...field}
            className={'x'}
            color={color}
            size={size}
            readOnly={readOnly}
            disabled={disabled}
            required={required}
            checked={field.value}
            icon={icon}
            checkedIcon={checkedIcon}
            inputProps={{
              'aria-label': label,
              role: 'checkbox',
            }}
            {...rest}
          />
        }
        sx={{ pointerEvents: readOnly ? 'none' : 'auto' }}
      />
      {(error?.message || helperText) && (
        <FormHelperText
          sx={{ width: `${helperTextStyleWidth}px` }}
          className={manageClassNames('custom-helper-text', 'checkbox', `${'x'}`, `${size}`)}>
          {error?.message || helperText}
        </FormHelperText>
      )}
    </FormControl></ThemeWrapper>
  );
};




Checkbox.defaultProps = {
  autoFocus: false,
  color: 'secondary',
  disableRipple: false,
  disabled: false,
  hidden: false,
  readOnly: false,
  required: false,
  size: 'small'
}

export default Checkbox;
