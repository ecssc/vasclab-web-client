import React from 'react';

import DefaultLayout from '../layouts/Default';
import PatientsTable from '../components/tables/PatientsTable';

const PatientsPage = (props) => (
    <DefaultLayout title="VascLab">
        <div className="container">
            <PatientsTable />
        </div>
    </DefaultLayout>
)

export default PatientsPage;
