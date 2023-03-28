import { TextFieldProps } from '@mui/material';
import { ICommonFieldProps } from '../commonTypes';

export interface INumberFormatProps {
    thousandSeperator?: boolean | ',' | '.' | ' ';
    decimalSeparator?: ',' | '.';
    decimalScale?: number;
    fixedDecimalScale?: boolean;
    allowNegative?: boolean;
    allowEmptyFormatting?: boolean;
    prefix?: string;
    suffix?: string;
    type?: 'text' | 'tel' | 'password';
    format?: string;
    removeFormatting?: (formattedValue: string) => string;
    mask?: string;
    displayType?: 'input' | 'text' | undefined;
    returnValue?: 'floatValue' | 'formattedValue' | 'value';
    maxLength?: number;
}

export interface INumberFieldProps extends Omit<
            TextFieldProps,
            |'helperText' | 'variant' | 'size' | 'margin' | 'onKeyDown' | 'onFocus' | 'onKeyUp' | 'type' | 'multiline' | 'row' | 'rowMax' | 'name' |  'onChange' | 'onBlur' | 'onFocus' | 'defaultValue'
        >,
        ICommonFieldProps {
    format?: INumberFormatProps;
    errorText?:any;
    size?:any;
    labelActive?:any;
}
