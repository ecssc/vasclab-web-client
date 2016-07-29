import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
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
        let patients = yield patient.index().then((response) => {
            return response.body.data;
        }).catch((error) => {
            throw error;
        });

        yield put({ type: types.PATIENTS_FETCHED, patients: patients });
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
