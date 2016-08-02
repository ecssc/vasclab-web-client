import patientsFetch from './sagas/patients-fetch';

import userAuthAttempt from './sagas/user-auth-attempt';
import userAuthCheck from './sagas/user-auth-check';
import userAuthLogout from './sagas/user-auth-logout';
import userAuthSuccess from './sagas/user-auth-success';

export default function* rootSaga() {
    yield [
        patientsFetch(),

        userAuthAttempt(),
        userAuthCheck(),
        userAuthLogout(),
        userAuthSuccess()
    ]
}
