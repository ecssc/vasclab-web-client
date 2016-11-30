import { leftPad } from './helpers';

/**
 * Returns the supplied ISO 8601 date in DD/MM/YYY format.
 *
 * @param {string} date
 * @return {string}
 */
export const date = (isoDate) => {
    const dateObj = new Date(isoDate);

    const day = leftPad(dateObj.getDate(), 2);
    const month = leftPad(dateObj.getMonth() + 1, 2);

    return `${day}/${month}/${dateObj.getFullYear()}`;
};

/**
 * Returns the supplied ISO 8601 date in DD/MM/YYY HH:MM format.
 *
 * @param {string} date
 * @param {string} date
 * @return {string}
 */
export const dateTime = (isoDate, separator = 'at') => {
    const dateObj = new Date(isoDate);

    const day = leftPad(dateObj.getDate(), 2);
    const month = leftPad(dateObj.getMonth() + 1, 2);

    return `${day}/${month}/${dateObj.getFullYear()} ${separator} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};
