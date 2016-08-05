import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DefaultLayout from '../layouts/Default';
import PatientCard from '../containers/PatientCard';
import ReportsTable from '../components/tables/ReportsTable';

const PatientPage = () => (
    <DefaultLayout title="VascLab">
        <Row>
            <Col xs={12}>
                <PatientCard />
            </Col>
            <Col xs={12}>
                <ReportsTable />
            </Col>
        </Row>
    </DefaultLayout>
);

export default PatientPage;
