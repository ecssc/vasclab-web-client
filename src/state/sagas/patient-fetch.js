import { put, call, takeLatest } from 'redux-saga/effects';
import { patient } from '../../api/client';
import { START_HTTP, COMPLETE_HTTP, PATIENT_FETCH, PATIENT_FETCHED, SHOW_SNACKBAR } from '../action-types';

/**
 * Attempts to fetch a patient from the api.
 *
 * @param {*} action
 */
export function* patientFetch(action) {
    try {
        yield put({ type: START_HTTP });

        const response = yield call(patient.find, action.patientId, action.queryParams);

        yield put({
            type: PATIENT_FETCHED,
            state: response,
        });
    } catch (error) {
        yield put({
            type: SHOW_SNACKBAR,
            state: { message: 'There was a problem loading this patient', action: 'Ok' },
        });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for patient fetch action.
 */
export function* watchPatientFetch() {
    yield* takeLatest(PATIENT_FETCH, patientFetch);
}
