import watchOrgReportsFetch from './sagas/org-reports-fetch';
import watchPatientFetch from './sagas/patient-fetch';
import watchPatientUpdate from './sagas/patient-update';
import watchPatientsFetch from './sagas/patients-fetch';
import watchUserAuthAttempt from './sagas/user-auth-attempt';
import watchUserAuthCheck from './sagas/user-auth-check';
import watchUserAuthRefresh from './sagas/user-auth-refresh';
import watchUserAuthLogout from './sagas/user-auth-logout';
import watchUserAuthSuccess from './sagas/user-auth-success';

export default function* rootSaga() {
    yield [
        watchOrgReportsFetch(),
        watchPatientFetch(),
        watchPatientUpdate(),
        watchPatientsFetch(),
        watchUserAuthAttempt(),
        watchUserAuthCheck(),
        watchUserAuthRefresh(),
        watchUserAuthLogout(),
        watchUserAuthSuccess(),
    ];
}
