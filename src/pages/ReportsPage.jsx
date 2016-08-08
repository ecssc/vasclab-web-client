import React from 'react';

import DefaultLayout from '../layouts/Default';
import ReportsTable from '../components/tables/ReportsTable';

const ReportsPage = ({ routeParams, location }) => {
    return (
        <DefaultLayout title="VascLab">
            <ReportsTable
                showPatientName
                organisationId={routeParams.organisationId}
                queryParams={location.query}
            />
        </DefaultLayout>
    );
};

ReportsPage.propTypes = {
    location: React.PropTypes.object,
    routeParams: React.PropTypes.object,
};

export default ReportsPage;
