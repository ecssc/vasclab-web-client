import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

import ProgressBar from '../containers/ProgressBar'
import ErrorToolbar from '../containers/ErrorToolbar'
import Toolbar from '../containers/Toolbar'

const Default = ({...props}) => (
    <DocumentTitle title={props.title}>
        <div>
            <ErrorToolbar />
            <Toolbar />
            <ProgressBar />
            {props.children}
        </div>
    </DocumentTitle>
)

Default.propTypes = {
    title: PropTypes.string,
}

export default Default;
