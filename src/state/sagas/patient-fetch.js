import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { patient } from '../../api/client';

/**
 * Watches for patient fetch state change.
 */
export default function* () {
    yield* takeEvery(types.PATIENT_FETCH, fetchPatient);
}

/**
 * Attempts to fetch a patient from the api.
 *
 * @param {*} action
 */
const fetchPatient = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        let response = yield patient.find(action.patientId, action.queryParams).then((response) => {
            return response.body;
        }).catch((error) => {
            throw error;
        });

        yield put({
            type: types.PATIENT_FETCHED,
            patient: {
                data: response.data,
                queryParams: action.queryParams
            }
        });
    } catch (error) {
        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'There was a problem loading this patient',
            action: 'Ok'
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
}
