import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import ProgressBar from '../containers/ProgressBar';
import Snackbar from '../containers/Snackbar';
import Toolbar from '../containers/Toolbar';

const Default = ({...props}) => (
    <DocumentTitle title={props.title}>
        <div>
            <Toolbar />
            <ProgressBar />
            <Snackbar />
            {props.children}
        </div>
    </DocumentTitle>
)

export default Default;
