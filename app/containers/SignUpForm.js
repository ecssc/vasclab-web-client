import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import EmailPasswordForm from '../components/EmailPasswordForm'

const mapStateToProps = (state) => {
    return {
        title: 'Sign up to VascLab',
        subtitle: (<div>Already a VascLab member? You can sign in <Link to="/login">here</Link>.</div>),
        buttonText: 'Sign Up'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const AuthFrom = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailPasswordForm)

export default AuthFrom
