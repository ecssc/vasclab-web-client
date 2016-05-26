import watchUserLogin from './sagas/fetch-user'

export default function* rootSaga() {
    yield [
        watchUserLogin()
    ]
}
