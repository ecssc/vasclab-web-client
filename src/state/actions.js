import * as types from './action-types';

/**
 * Attempts to authenticate a user.
 *
 * @return {{type}}
 */
export const userAuthAttempt = (model) => ({
    type: types.USER_AUTH_ATTEMPT,
    ...model,
});

/**
 * Checks the authentication status of the current user.
 *
 * @return {{type}}
 */
export const userAuthCheck = () => ({
    type: types.USER_AUTH_CHECK,
});

/**
 * Logs the currently authenticated user out.
 *
 * @return {{type}}
 */
export const userAuthLogout = () => ({
    type: types.USER_AUTH_LOGOUT,
});

/**
 * Hides the error snackbar component.
 *
 * @return {{type}}
 */
export const hideSnackbar = () => ({
    type: types.HIDE_SNACKBAR,
});

/**
 * Fetches all patients from the api.
 *
 * @return {{type}}
 */
export const patientsFetch = (organisationId, queryParams) => ({
    type: types.PATIENTS_FETCH,
    organisationId,
    queryParams,
});

/**
 * Fetches a single patient from the api.
 *
 * @return {{type}}
 */
export const patientFetch = (patientId, queryParams) => ({
    type: types.PATIENT_FETCH,
    patientId,
    queryParams,
});

/**
 * Fetches all reports from the api.
 *
 * @return {{type}}
 */
export const reportsFetch = (patientId = null, organisationId = null, queryParams = {}) => ({
    type: types.REPORTS_FETCH,
    organisationId,
    patientId,
    queryParams,
});
