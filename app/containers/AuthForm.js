import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import EmailPasswordForm from '../components/EmailPasswordForm'

const mapStateToProps = (state) => {
    return {
        title: 'Sign into VascLab',
        subtitle: (
            <div>
                New to VascLab? You can sign up <Link to="/sign-up">here</Link>.
            </div>
        ),
        buttonText: 'Sign In'
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
