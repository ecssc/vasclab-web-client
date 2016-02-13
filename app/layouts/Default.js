import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import NavToolbar from '../containers/NavToolbar'
import MainNav from '../containers/MainNav'

const Default = ({...props}) => (
    <DocumentTitle title={props.title}>
        <div>
            <NavToolbar />
            <MainNav />
        </div>
    </DocumentTitle>
)

Default.propTypes = {
    title: PropTypes.string,
}

export default Default;
