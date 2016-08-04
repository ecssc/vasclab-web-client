import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { patient } from '../../api/client';

/**
 * Attempts to fetch reports from the api.
 *
 * @param {*} action
 */
const fetchReports = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        const reports = yield patient.reports(action.patientId, action.queryParams).then((response) => {
            return response.body;
        }).catch((error) => {
            throw error;
        });

        yield put({
            type: types.REPORTS_FETCHED,
            reports: {
                data: reports.data,
                pagination: reports.meta.pagination,
                queryParams: action.queryParams,
            },
        });
    } catch (error) {
        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'There was a problem loading your reports',
            action: 'Ok',
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
};

/**
 * Watches for reports fetch state change.
 */
export default function* () {
    yield* takeEvery(types.REPORTS_FETCH, fetchReports);
}
