import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import DefaultLayout from '../layouts/Default';
import PatientCard from '../containers/PatientCard';
import ReportsTable from '../components/tables/ReportsTable';

const PatientPage = ({ routeParams }) => (
    <DefaultLayout title="VascLab">
        <Row>
            <Col xs={12}>
                <PatientCard patientId={routeParams.patientId} />
            </Col>
            <Col xs={12}>
                <ReportsTable patientId={routeParams.patientId} />
            </Col>
        </Row>
    </DefaultLayout>
);

PatientPage.propTypes = {
    routeParams: React.PropTypes.object,
};

export default PatientPage;
