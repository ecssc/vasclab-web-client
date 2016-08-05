import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import DocumentTitle from 'react-document-title';

import MainNav from '../containers/MainNav';
import ProgressBar from '../containers/ProgressBar';
import Snackbar from '../containers/Snackbar';
import Toolbar from '../containers/Toolbar';

const Default = ({ title, children }) => (
    <DocumentTitle title={title}>
        <div>
            <Toolbar />
            <ProgressBar />
            <Grid>
                <Row>
                    <Col xs={2}>
                        <div style={{ width: '88.5%' }}>
                            <MainNav />
                        </div>
                    </Col>
                    <Col xs={10}>
                        {children}
                    </Col>
                </Row>
            </Grid>
            <Snackbar />
        </div>
    </DocumentTitle>
);

Default.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.any,
};

export default Default;
