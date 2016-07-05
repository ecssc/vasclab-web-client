import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userAuthAttempt } from '../../state/actions';
import EmailPassword from '../../components/forms/EmailPassword';

const mapStateToProps = (state) => {
    return {
        title: 'Sign into VascLab',
        subtitle: (<div>New to VascLab? You can sign up <Link to="/sign-up">here</Link>.</div>),
        buttonText: 'Sign In',
        formDisabled: state.ui.formInputs.disabled
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
)(EmailPassword);

export default AuthForm;
