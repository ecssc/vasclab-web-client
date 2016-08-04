import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DefaultLayout from '../layouts/Default';
import PatientEditForm from '../containers/forms/PatientEditForm';
import ReportsTable from '../components/tables/ReportsTable';

const PatientPage = () => (
    <DefaultLayout title="VascLab">
        <Grid>
            <Row>
                <Col xs>
                    <PatientEditForm />
                </Col>
            </Row>
            <Row>
                <Col xs>
                    <ReportsTable />
                </Col>
            </Row>
        </Grid>
    </DefaultLayout>
);

export default PatientPage;
