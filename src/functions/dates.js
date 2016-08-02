import { leftPad } from './helpers';

/**
 * Returns the supplied date in DD/MM/YYY format.
 *
 * @param date
 * @return {string}
 */
export const date = (date) => {
    let dateObj = new Date(date);

    let day = leftPad(dateObj.getDate(), 2);
    let month = leftPad(dateObj.getMonth() + 1, 2);


    return `${day}/${month}/${dateObj.getFullYear()}`;
}
