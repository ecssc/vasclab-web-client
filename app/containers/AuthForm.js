import React, { Component } from 'react'
import { Link } from 'react-router'
import EmailPasswordForm from '../components/EmailPasswordForm'

class AuthForm extends Component {
    /**
     * Handles the on mouse down event of the form button.
     */
    submitHandler(model) {
        console.log(model)
    }

    /**
     * Renders the auth form component.
     *
     * @return {XML}
     */
    render() {
        return (
            <EmailPasswordForm
                title="Sign into VascLab"
                subtitle={<div>New to VascLab? You can sign up <Link to="/sign-up">here</Link>.</div>}
                buttonText="Sign In"
                submitHandler={this.submitHandler}
            />
        )
    }
}

export default AuthForm
