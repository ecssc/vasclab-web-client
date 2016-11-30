/**
 * Left pads n with z until it is the the same length as width.
 *
 * @param n
 * @param width
 * @param z
 * @return {*}
 */
export const leftPad = (int, width, pad = 0) => {
    const string = `${int}`;
    const padding = `${pad}`;

    return string.length >= width ? string : new Array((width - string.length) + 1).join(padding) + string;
};

/**
 * Right pads n with z until it is the the same length as width.
 *
 * @param n
 * @param width
 * @param z
 * @return {*}
 */
export const rightPad = (int, width, pad = 0) => {
    const string = `${int}`;
    const padding = `${pad}`;

    return string.length >= width ? string : string + new Array((width - string.length) + 1).join(padding);
};
