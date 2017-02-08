/**
 * Sets a value in localStorage using a promise.
 *
 * @param {string} key
 * @param {string} value
 */
export const set = (key, value) => new Promise((resolve, reject) => {
    try {
        localStorage.setItem(key, value);
        resolve(value);
    } catch (e) {
        reject(e);
    }
});

/**
 * Unsets a value in localStorage.
 *
 * @param {string} key
 */
export const unset = key => new Promise((resolve, reject) => {
    try {
        localStorage.removeItem(key);
        resolve();
    } catch (e) {
        reject(e);
    }
});

/**
 * Unsets a value in localStorage after the timeout period specified in seconds.
 *
 * @param {string} key
 * @param {Number} timeout
 */
export const unsetAfterTimeout = (key, timeout) => new Promise((resolve, reject) => {
    const seconds = timeout * 1000;

    try {
        setTimeout(() => localStorage.removeItem(key), seconds);
        resolve();
    } catch (e) {
        reject(e);
    }
});

/**
 * Clears all items from localStorage using a promise.
 */
export const clear = () => new Promise((resolve, reject) => {
    try {
        localStorage.clear();
        resolve();
    } catch (e) {
        reject(e);
    }
});
