import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { patient } from '../../api/client';

/**
 * Attempts to update the patient via the api.
 *
 * @param {*} action
 */
const fetchPatient = function* (action) {
    yield put({ type: types.HIDE_SNACKBAR });
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        const updated = yield patient.update(action.patientId, action.model)
            .then(response => response.body)
            .catch((error) => {
                throw error;
            });

        yield put({
            type: types.PATIENT_FETCHED,
            patient: {
                data: updated.data,
                queryParams: action.queryParams,
            },
        });

        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'Your patient\'s details have been updated',
            action: 'Ok',
            autoHideDuration: 2500,
        });
    } catch (error) {
        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'There was a problem updating your patient',
            action: 'Ok',
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
};

/**
 * Watches for patient update state change.
 */
export default function* () {
    yield* takeEvery(types.PATIENT_UPDATE, fetchPatient);
}
