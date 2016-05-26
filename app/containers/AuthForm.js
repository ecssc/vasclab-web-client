import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import EmailPasswordForm from '../components/EmailPasswordForm'
import { userAuthAttempt } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        title: 'Sign into VascLab',
        subtitle: (<div>New to VascLab? You can sign up <Link to="/sign-up">here</Link>.</div>),
        buttonText: 'Sign In'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitHandler: (model) => dispatch(userAuthAttempt(model))
    }
}

const AuthForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailPasswordForm)

export default AuthForm
