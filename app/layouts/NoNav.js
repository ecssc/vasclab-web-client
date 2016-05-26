import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

import MainProgressBar from '../containers/MainProgressBar'
import NoNavToolbar from '../containers/NoNavToolbar'

const NoNav = ({...props}) => (
    <DocumentTitle title={props.title}>
        <div>
            <NoNavToolbar />
            <MainProgressBar />
            {props.children}
        </div>
    </DocumentTitle>
)

NoNav.propTypes = {
    title: PropTypes.string,
}

export default NoNav;
