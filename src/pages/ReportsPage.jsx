import React from 'react';

import DefaultLayout from '../layouts/Default';
import ReportsTable from '../components/tables/ReportsTable';

const ReportsPage = ({ routeParams }) => (
    <DefaultLayout title="VascLab">
        <ReportsTable showPatientName organisationId={routeParams.organisationId} />
    </DefaultLayout>
);

ReportsPage.propTypes = {
    routeParams: React.PropTypes.object,
};

export default ReportsPage;
