import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

function* fetchUser(action) {
    try {
        yield put({type: "USER_FETCH_SUCCEEDED", user: {}});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED",message: e.message});
    }
}

export default function* mySaga() {
    yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
