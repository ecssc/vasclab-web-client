import patientFetch from './sagas/patient-fetch';
import patientUpdate from './sagas/patient-update';
import patientsFetch from './sagas/patients-fetch';
import reportsFetch from './sagas/reports-fetch';
import userAuthAttempt from './sagas/user-auth-attempt';
import userAuthCheck from './sagas/user-auth-check';
import userAuthLogout from './sagas/user-auth-logout';
import userAuthSuccess from './sagas/user-auth-success';

export default function* rootSaga() {
    yield [
        patientFetch(),
        patientUpdate(),
        patientsFetch(),
        reportsFetch(),
        userAuthAttempt(),
        userAuthCheck(),
        userAuthLogout(),
        userAuthSuccess(),
    ];
}
