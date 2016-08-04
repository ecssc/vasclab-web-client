import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DefaultLayout from '../layouts/Default';
import PatientEditForm from '../containers/forms/PatientEditForm';

const PatientPage = (props) => (
    <DefaultLayout title="VascLab">
        <Grid>
            <Row>
                <Col xs>
                    <PatientEditForm />
                </Col>
            </Row>
        </Grid>
    </DefaultLayout>
)

export default PatientPage;
