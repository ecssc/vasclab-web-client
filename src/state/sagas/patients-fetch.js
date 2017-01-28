import { put, call, takeLatest } from 'redux-saga/effects';
import { organisation } from '../../api/client';
import { START_HTTP, PATIENTS_FETCHED, SHOW_SNACKBAR, COMPLETE_HTTP, PATIENTS_FETCH } from '../action-types';

/**
 * Attempts to fetch patients from the api.
 *
 * @param {*} action
 */
export function* patientsFetch(action) {
    try {
        yield put({ type: START_HTTP });

        const response = yield call(organisation.patients, action.organisationId, action.queryParams);

        yield put({
            type: PATIENTS_FETCHED,
            state: response,
        });
    } catch (error) {
        yield put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'There was a problem loading your patients',
                action: 'Ok',
            },
        });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for patients fetch state change.
 */
export function* watchPatientsFetch() {
    yield* takeLatest(PATIENTS_FETCH, patientsFetch);
}
