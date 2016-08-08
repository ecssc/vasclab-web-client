import React from 'react';

import DefaultLayout from '../layouts/Default';
import PatientsTable from '../components/tables/PatientsTable';

const PatientsPage = ({ routeParams, location }) => (
    <DefaultLayout title="VascLab">
        <PatientsTable
            organisationId={routeParams.organisationId}
            queryParams={location.query}
        />
    </DefaultLayout>
);

PatientsPage.propTypes = {
    routeParams: React.PropTypes.object,
};

export default PatientsPage;
