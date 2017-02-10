import { delay } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { USER_AUTH_EXPIRE } from '../action-types';
import { get, unset } from '../../helpers/local-storage';

/**
 * Called when we want to start waiting for an access token to expire.
 */
export function* userAuthExpire() {
    const expiryDate = yield call(get, process.env.EXPIRE_TIME_NAME);

    yield delay((new Date(expiryDate)).getTime() - (new Date()).getTime());

    yield call(unset, process.env.ACCESS_TOKEN_NAME);
}

/**
 * Watches for user auth expire action.
 */
export function* watchUserAuthExpire() {
    yield takeEvery(USER_AUTH_EXPIRE, userAuthExpire);
}
