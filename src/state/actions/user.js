import { USER_AUTH_ATTEMPT, USER_AUTH_CHECK, USER_AUTH_LOGOUT } from '../action-types';

/**
 * Attempts to authenticate a user.
 */
export const userAuthAttempt = model => ({
    type: USER_AUTH_ATTEMPT,
    model,
});

/**
 * Checks the authentication status of the current user.
 */
export const userAuthCheck = () => ({
    type: USER_AUTH_CHECK,
});

/**
 * Logs the currently authenticated user out.
 */
export const userAuthLogout = () => ({
    type: USER_AUTH_LOGOUT,
});
