import { put, call, takeLatest } from 'redux-saga/effects';
import { patient } from '../../api/client';

import {
    START_HTTP,
    PATIENT_REPORTS_FETCHED,
    SHOW_SNACKBAR,
    COMPLETE_HTTP,
    PATIENT_REPORTS_FETCH,
} from '../action-types';

/**
 * Attempts to fetch reports from the api.
 *
 * @param {*} action
 */
export function* patientReportsFetch(action) {
    try {
        yield put({ type: START_HTTP });

        const response = yield call(patient.reports, action.patientId, action.queryParams);

        yield put({
            type: PATIENT_REPORTS_FETCHED,
            state: response,
        });
    } catch (error) {
        yield put({
            type: SHOW_SNACKBAR,
            state: {
                message: 'There was a problem loading your reports',
                action: 'Ok',
            },
        });
    } finally {
        yield put({ type: COMPLETE_HTTP });
    }
}

/**
 * Watches for reports fetch state change.
 */
export function* watchPatientReportsFetch() {
    yield* takeLatest(PATIENT_REPORTS_FETCH, patientReportsFetch);
}
