import React from 'react';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const SignInForm = () => (
    <Card>
        <CardHeader
            title="Sign Into VascLab"
            subtitle="Secure Sign In"
            avatar={<Avatar icon={<LockOutline />} />}
        />
        <CardText>
            <TextField
                fullWidth
                id="email"
                hintText="Your Email Address"
            />
            <TextField
                fullWidth
                type="password"
                id="password"
                hintText="Your Password"
            />
        </CardText>
        <CardActions>
            <RaisedButton
                primary
                label="Sign In"
            />
        </CardActions>
    </Card>
);

SignInForm.propTypes = {
    //
};

export default SignInForm;
