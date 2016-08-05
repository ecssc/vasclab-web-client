import React from 'react';
import { Grid } from 'react-flexbox-grid';
import DocumentTitle from 'react-document-title';

import ProgressBar from '../containers/ProgressBar';
import Snackbar from '../containers/Snackbar';
import Toolbar from '../containers/Toolbar';

const Default = ({ title, children }) => (
    <DocumentTitle title={title}>
        <div>
            <Toolbar />
            <ProgressBar />
            <Grid>
                {children}
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
