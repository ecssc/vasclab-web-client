import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as types from '../action-types';
import { patient } from '../../api/client';

/**
 * Watches for patients fetch state change.
 */
export default function* () {
    yield* takeEvery(types.PATIENTS_FETCH, fetchPatients);
}

/**
 * Attempts to fetch patients from the api.
 *
 * @param {*} action
 */
const fetchPatients = function* (action) {
    yield put({ type: types.SHOW_PROGRESS_BAR });

    try {
        let response = yield patient.index(action.pageNumber).then((response) => {
            return response.body;
        }).catch((error) => {
            throw error;
        });

        yield put({
            type: types.PATIENTS_FETCHED,
            patients: { data: response.data, pagination: response.meta.pagination }
        });

        if (response.meta.pagination.current_page === 1) {
            browserHistory.push(location.pathname);
        } else {
            browserHistory.push(`${location.pathname}?page=${response.meta.pagination.current_page}`);
        }
    } catch (error) {
        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'There was a problem loading your patients',
            action: 'Ok'
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
}
