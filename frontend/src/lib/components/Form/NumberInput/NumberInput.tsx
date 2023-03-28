import { forwardRef } from 'react';
import { isNumber } from 'lodash';
import { NumberFormatBase } from 'react-number-format';

const NumberFormatCustom = forwardRef(function NumberFormatCustom({ name, onChange, returnValue, ...other }: any, ref) {
    return (
        <NumberFormatBase
            {...other}
            getInputRef={ref}
            onValueChange={(values: any) => {
                onChange({
                    target: {
                        name,
                        value: isNumber(values.floatValue) ? (returnValue ? values[returnValue] : values.floatValue) : '',
                    },
                });
            }}
        />
    );
});

export default NumberFormatCustom;
