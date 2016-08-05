import React from 'react';

import DefaultLayout from '../layouts/Default';
import ReportsTable from '../components/tables/ReportsTable';

const ReportsPage = () => (
    <DefaultLayout title="VascLab">
        <ReportsTable />
    </DefaultLayout>
);

export default ReportsPage;
