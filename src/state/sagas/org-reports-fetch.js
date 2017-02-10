import { put, call, takeLatest } from 'redux-saga/effects';
import { organisation } from '../../api/client';
import { START_HTTP, ORG_REPORTS_FETCHED, SHOW_SNACKBAR, COMPLETE_HTTP, ORG_REPORTS_FETCH } from '../action-types';

/**
 * Attempts to fetch reports from the api.
 *
 * @param {*} action
 */
export function* orgReportsFetch(action) {
    try {
        yield put({ type: START_HTTP });

        const response = yield call(organisation.reports, action.organisationId, action.queryParams);

        yield put({
            type: ORG_REPORTS_FETCHED,
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
 * Watches for reports fetch action.
 */
export function* watchOrgReportsFetch() {
    yield* takeLatest(ORG_REPORTS_FETCH, orgReportsFetch);
}
