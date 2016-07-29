import React from 'react';

import DefaultLayout from '../layouts/Default';
import PatientsTable from '../components/tables/PatientsTable';

const PatientsPage = (props) => (
    <DefaultLayout title="VascLab">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <PatientsTable />
                </div>
            </div>
        </div>
    </DefaultLayout>
)

export default PatientsPage;
