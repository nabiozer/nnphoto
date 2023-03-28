import { format, fromUnixTime, getUnixTime } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { tr } from 'date-fns/locale';

export const getDate = (date: number, dateFormat: string) => {
    if (date) {
        const clonedDate = toDate(fromUnixTime(date), { timeZone: 'Europe/Istanbul' });
        return date ? format(clonedDate, dateFormat, { locale: tr }) : '';
    }

    return '';
};

export const getNow = (dateFormat: string) => {
    return format(getUnixTime(new Date()) * 1000, dateFormat, { locale: tr });
};
