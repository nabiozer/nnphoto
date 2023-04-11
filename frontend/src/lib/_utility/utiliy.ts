import { getUnixTime, format, addHours, fromUnixTime } from 'date-fns';
import { tr } from 'date-fns/locale';
import { toDate } from 'date-fns-tz';
import {default as manageClassNames} from 'classnames'

export const aws3Url = 'https://nnphotofilmbucket.s3.eu-west-1.amazonaws.com/'

export {manageClassNames}
export const sleep = (delay = 0) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

export const isObject = (item: any) => {
    return item && typeof item === 'object' && !Array.isArray(item);
};

export const deepmerge = (target: any, source: any, options: any = { clone: true }) => {
    const output: any = options.clone ? { ...target } : target;
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (key === '__proto__') {
                return;
            }
            if (isObject(source[key]) && key in target) {
                output[key] = deepmerge(target[key], source[key], options);
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
};

export const deepCopy = <T>(objectValue: T): T => (objectValue ? JSON.parse(JSON.stringify(objectValue)) : objectValue);

export const ticksToDate = (ticks: number) => {
    return getUnixTime(new Date(ticks / 1e4 + new Date('0001-01-01T00:00:00Z').getTime()));
};

export const getTicksDate = (date: number, dateFormat: string, location: string) => {
    if (date) {
        const newDate = ticksToDate(date);
        const clonedDate = toDate(addHours(fromUnixTime(newDate), -2), { timeZone: location });

        return newDate ? format(clonedDate, dateFormat, { locale: tr }) : '';
    }
    return '';
};

export const getNow = (dateFormat: string) => {
    return format(getUnixTime(new Date()) * 1000, dateFormat, { locale: tr });
};

export const cleanText = (text: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = text;
    return tmp.textContent || tmp.innerText;
};

export const cleanNullProperty = (obj: any) => {
    if (Object.keys(obj)?.length) {
        Object.keys(obj).forEach((propName: any) => {
            if (
                obj[propName] === null ||
                obj[propName] === undefined ||
                obj[propName] === '' ||
                (Array.isArray(obj[propName]) && obj[propName].length === 0)
            ) {
                delete obj[propName];
            }
        });
    }
    return obj;
};

export const getFilesize = (bytes: number, dp = 1) => {
    const thresh = 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + 'B';
    }

    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;
    const r = 10 ** dp;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + '' + units[u];
};
