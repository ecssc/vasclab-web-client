import * as types from './action-types';

/**
 * Attempts to authenticate a user.
 */
export const userAuthAttempt = model => ({
    type: types.USER_AUTH_ATTEMPT,
    ...model,
});

/**
 * Checks the authentication status of the current user.
 */
export const userAuthCheck = () => ({
    type: types.USER_AUTH_CHECK,
});

/**
 * Logs the currently authenticated user out.
 */
export const userAuthLogout = () => ({
    type: types.USER_AUTH_LOGOUT,
});

/**
 * Hides the error snackbar component.
 */
export const hideSnackbar = () => ({
    type: types.HIDE_SNACKBAR,
});

/**
 * Fetches all patients from the api.
 */
export const patientsFetch = (organisationId, queryParams) => ({
    type: types.PATIENTS_FETCH,
    organisationId,
    queryParams,
});

/**
 * Fetches a single patient from the api.
 */
export const patientFetch = (patientId, queryParams) => ({
    type: types.PATIENT_FETCH,
    patientId,
    queryParams,
});

/**
 * Fetches a single patient from the api.
 */
export const patientUpdate = (patientId, model, queryParams = {}) => ({
    type: types.PATIENT_UPDATE,
    patientId,
    model,
    queryParams,
});

/**
 * Fetches all reports from the api.
 */
export const reportsFetch = (patientId = null, organisationId = null, queryParams = {}) => ({
    type: types.REPORTS_FETCH,
    organisationId,
    patientId,
    queryParams,
});

/**
 * Toggles the visibility of the patient card edit form.
 */
export const patientCardToggleEditForm = () => ({
    type: types.PATIENT_CARD_TOGGLE_EDIT_FORM,
});
