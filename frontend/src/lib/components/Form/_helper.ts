import { MenuProps } from '@mui/material';
import { fromUnixTime, getUnixTime } from 'date-fns';
import { get, isNumber } from 'lodash';
export const getMessage = (errors: any, name: string) => {
    const messageArr = get(errors, name);
    if (messageArr) {
        return messageArr.message;
    }
    return null;
};

export const SelectBoxPoperProps: any = {
    PaperProps: {
        className: 'select-dropdown-menu-container',
        style: { maxHeight: 300 },
    },
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
    },
    // getContentAnchorEl:null
};

export const getRoundUp = (value: any, up: number) => {
    const coff = 1000 * 60 * up;
    return new Date(Math.ceil(value / coff) * coff);
};

export const getRoundDown = (value: any, down: number) => {
    const coff = 1000 * 60 * down;
    return new Date(Math.ceil(value / coff) * coff);
};

export const getRoundZero = (value: any) => {
    const coff = 1000 * 60;
    return new Date(Math.ceil(value / coff) * coff);
};

export const getDateInit = (value: any, isView: boolean) => {
    if (value && isNumber(value)) {
        return isView ? getRoundZero(fromUnixTime(value)) : getUnixTime(getRoundZero(fromUnixTime(value)));
    }

    if (value && !isNumber(value)) {
        return getRoundZero(value);
    }

    if (!value) return '';
};

export const getTimePickerInit = (
    value: any,
    isView: boolean,
    roundUp: number | null = null,
    roundDown: number | null = null
) => {
    if (value && isNumber(value)) {
        if (roundUp) {
            return isView ? getRoundDown(fromUnixTime(value), roundUp) : getUnixTime(getRoundUp(fromUnixTime(value), roundUp));
        }
        if (roundDown) {
            return isView
                ? getRoundUp(fromUnixTime(value), roundDown)
                : getUnixTime(getRoundDown(fromUnixTime(value), roundDown));
        }

        return isView ? getRoundZero(fromUnixTime(value)) : getUnixTime(getRoundZero(fromUnixTime(value)));
    }

    if (value && !isNumber(value)) {
        if (roundUp) {
            return getRoundUp(fromUnixTime(value), roundUp);
        }
        if (roundDown) {
            return getRoundDown(fromUnixTime(value), roundDown);
        }

        return getRoundZero(value);
    }
    if (!value) return '';

    return '';
};





export const SelectMenuProps: Partial<MenuProps> = {
 PaperProps: {
  className: 'select-dropdown-menu-container',
  style: { maxHeight: 300 },
 },
 anchorOrigin: {
  vertical: 'bottom',
  horizontal: 'left',
 },
 transformOrigin: {
  vertical: 'top',
  horizontal: 'left',
 },
};

const a = 'x'
export const defaultDatePickerSeparator = {
 [a]: '.',

};


export const defaultTimePickerSeparator = {
 [a]: ':',

};


export const pickerProps = {
 ERP: {
  datePicker: {
   dateSeparator: defaultDatePickerSeparator.x,
   mask: `_${defaultDatePickerSeparator.x}${defaultDatePickerSeparator.x}_`,
   inputFormat: `dd${defaultDatePickerSeparator.x}MM${defaultDatePickerSeparator.x}yyyy`,
  },
  dateTimePicker: {
   dateSeparator: defaultDatePickerSeparator.x,
   timeSeparator: defaultTimePickerSeparator.x,
   mask: `_${defaultDatePickerSeparator.x}${defaultDatePickerSeparator.x}_ _${defaultTimePickerSeparator.x}_`,
   inputFormat: `dd${defaultDatePickerSeparator.x}MM${defaultDatePickerSeparator.x}yyyy HH${defaultTimePickerSeparator.x}mm`,
  },
  timePicker: {
   timeSeparator: defaultTimePickerSeparator.x,
   mask: `_${defaultTimePickerSeparator.x}_`,
   inputFormat: `HH${defaultTimePickerSeparator.x}mm`,
  },
 },
};
