import App from './App';

export default {
    path: '/',
    component: App,
    childRoutes: [
        {
            path: 'login',
            getComponent: (state, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/LoginPage').default));
            },
        },
        {
            path: 'sign-up',
            getComponent: (state, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/SignUpPage').default));
            },
        },
        {
            path: ':organisationId',
            getComponents: (location, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/HomePage').default));
            },
        },
        {
            path: ':organisationId/patients',
            getComponents: (location, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/PatientsPage').default));
            },
        },
        {
            path: ':organisationId/patients/:patientId',
            getComponents: (location, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/PatientPage').default));
            },
        },
        {
            path: ':organisationId/reports',
            getComponents: (location, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/ReportsPage').default));
            },
        },
        {
            path: ':organisationId/reports/:reportId',
            getComponents: (location, cb) => {
                require.ensure([], (require) => cb(null, require('../pages/ReportPage').default));
            },
        },
    ],
};
