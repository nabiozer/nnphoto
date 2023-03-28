import { RadioGroupProps } from '@mui/material';
 import { ICommonFieldProps } from '../commonTypes';
  export interface IRadioGroupProps extends Pick<RadioGroupProps, 'children' | 'row' | 'sx'>, Pick<ICommonFieldProps, 'name' | 'helperText' | 'control' | 'errors' | 'labelPlacement' | 'labelWidth'> { label?: string; }