import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import EmailPasswordForm from '../../components/forms/EmailPasswordForm';

const mapStateToProps = (state) => {
    return {
        title: 'Sign up to VascLab',
        subtitle: (<div>Already a VascLab member? You can sign in <Link to="/login">here</Link>.</div>),
        buttonText: 'Sign Up',
        formDisabled: state.ui.formInputs.disabled
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailPasswordForm);

export default SignUpForm;
