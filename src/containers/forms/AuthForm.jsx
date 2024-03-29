import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { userAuthAttempt } from '../../state/actions';
import EmailPasswordForm from '../../components/forms/EmailPasswordForm';

const mapStateToProps = state => ({
    title: 'Sign into VascLab',
    subtitle: (<div>New to VascLab? You can sign up <Link to="/sign-up">here</Link>.</div>),
    buttonText: 'Sign In',
    formDisabled: state.ui.formInputs.disabled,
});

const mapDispatchToProps = dispatch => ({
    submitHandler: model => dispatch(userAuthAttempt(model)),
});

const AuthForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailPasswordForm);

export default AuthForm;
