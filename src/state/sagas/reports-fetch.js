import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

import * as types from '../action-types';
import { organisation, patient } from '../../api/client';

/**
 * Fetches all reports associated with a patient.
 *
 * @param patientId
 * @param queryParams
 * @return {Promise.<TResult>}
 */
const fetchPatientReports = (patientId, queryParams) => {
    return patient.reports(patientId, queryParams)
        .then((response) => (response.body))
        .catch((error) => {
            throw error;
        });
};

/**
 * Fetches all reports belonging to an organisation.
 *
 * @param orgainisationId
 * @param queryParams
 * @return {Promise.<TResult>}
 */
const fetchOrganisationReports = (orgainisationId, queryParams) => {
    return organisation.reports(orgainisationId, queryParams)
        .then((response) => (response.body))
        .catch((error) => {
            throw error;
        });
};

/**
 * Attempts to fetch reports from the api.
 *
 * @param {*} action
 */
const fetchReports = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        let reports = null;

        if (action.patientId !== null) {
            reports = yield fetchPatientReports(action.patientId, action.queryParams);
        }

        if (action.organisationId !== null) {
            reports = yield fetchOrganisationReports(action.organisationId, action.queryParams);
        }

        yield put({
            type: types.REPORTS_FETCHED,
            reports: {
                data: reports.data,
                pagination: reports.meta.pagination,
                queryParams: action.queryParams,
            },
        });
    } catch (error) {
        console.log(error);
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
