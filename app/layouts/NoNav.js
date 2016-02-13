import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import NoNavToolbar from '../containers/NoNavToolbar'

const NoNav = ({...props}) => (
    <DocumentTitle title={props.title}>
        <div>
            <NoNavToolbar />
            {props.children}
        </div>
    </DocumentTitle>
)

NoNav.propTypes = {
    title: PropTypes.string,
}

export default NoNav;
