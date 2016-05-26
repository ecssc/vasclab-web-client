import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import * as types from './action-types'

/**
 * The root saga which exports all other sagas to middleware.
 */
export default function* rootSaga() {
    yield [
        watchUserLogin()
    ]
}

/**
 * Watches for user login state change.
 */
function* watchUserLogin() {
    yield* takeEvery(types.USER_AUTH_ATTEMPT, fetchUser)
}

/**
 * Attempts to fetch the user from the api.
 *
 * @param {*} action
 */
function* fetchUser(action) {
    //
}
