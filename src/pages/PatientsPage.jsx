import React from 'react';

import DefaultLayout from '../layouts/Default';
import PatientsTable from '../components/tables/PatientsTable';

const PatientsPage = () => (
    <DefaultLayout title="VascLab">
        <PatientsTable />
    </DefaultLayout>
);

export default PatientsPage;
