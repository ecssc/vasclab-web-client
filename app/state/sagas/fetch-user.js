import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import {
    USER_AUTH_ATTEMPT,
    SHOW_PROGRESS_BAR ,
    DISABLE_FORM_INPUTS
} from '../action-types'

/**
 * Watches for user login state change.
 */
export default function* () {
    yield* takeEvery(USER_AUTH_ATTEMPT, validateCredentials)
}

/**
 * Attempts to fetch the user from the api.
 *
 * @param {*} action
 */
const validateCredentials = function* (action) {
    yield put({type: SHOW_PROGRESS_BAR})
    yield put({type: DISABLE_FORM_INPUTS})
}
