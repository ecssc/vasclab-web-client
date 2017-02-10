import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SignInForm from '../../components/SignInForm';

const SignIn = () => (
    <Row>
        <Col mdOffset={4} md={4} xs={12}>
            <SignInForm />
        </Col>
    </Row>
);

export default SignIn;
