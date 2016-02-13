import React from 'react'
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

export default NoNav;
