/**
 * Left pads n with z until it is the the same length as width.
 *
 * @param n
 * @param width
 * @param z
 * @return {*}
 */
export const leftPad = (n, width, z = 0) => {
    n = n + '';
    
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
