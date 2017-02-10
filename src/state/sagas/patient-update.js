import { put, call, takeEvery } from 'redux-saga/effects';
import { patient } from '../../api/client';

import {
    START_HTTP,
    HIDE_SNACKBAR,
    PATIENT_FETCHED,
    SHOW_SNACKBAR,
    COMPLETE_HTTP,
    PATIENT_UPDATE,
} from '../action-types';

/**
 * Attempts to update the patient via the api.
 *
 * @param {*} action
 */
export function* patientUpdate(action) {
    try {
        yield put({ type: START_HTTP });
        yield put({ type: HIDE_SNACKBAR });

        const response = yield call(patient.update, action.patientId, action.model);

        yield put({
            type: PATIENT_FETCHED,
            state: response,
        });

        yield put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'Your patient\'s details have been updated',
                action: 'Ok',
            },
        });
    } catch (error) {
        yield put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'There was a problem updating your patient',
                action: 'Ok',
            },
        });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for patient update action.
 */
export function* watchPatientUpdate() {
    yield* takeEvery(PATIENT_UPDATE, patientUpdate);
}
