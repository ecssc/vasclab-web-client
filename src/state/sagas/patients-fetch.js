import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as types from '../action-types';
import { organisation } from '../../api/client';

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
        const patients = yield organisation.patients(action.organisationId, action.queryParams)
                                           .then((response) => (response.body))
                                           .catch((error) => {
                                               throw error;
                                           });

        yield put({
            type: types.PATIENTS_FETCHED,
            patients: {
                data: patients.data,
                pagination: patients.meta.pagination,
                queryParams: action.queryParams,
            },
        });
    } catch (error) {
        yield put({
            type: types.SHOW_SNACKBAR,
            message: 'There was a problem loading your patients',
            action: 'Ok',
        });
    } finally {
        yield put({ type: types.HIDE_PROGRESS_BAR });
    }
};
