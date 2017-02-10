import React from 'react';
import { Form } from 'formsy-react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { userAuthAttempt } from '../../state/actions/user';

const mapStateToProps = state => ({
    formDisabled: state.ui.forms.disabled,
});

const mapDispatchToProps = dispatch => ({
    submitHandler: model => dispatch(userAuthAttempt(model)),
});

const SignInForm = ({ submitHandler, formDisabled }) => (
    <Form
        onValidSubmit={submitHandler}
        onInvalidSubmit={() => console.log('invalid!')}
    >
        <Card>
            <CardHeader
                title="Sign Into VascLab"
                subtitle="Secure Sign In"
                avatar={<Avatar icon={<LockOutline />} />}
            />
            <CardText>
                <FormsyText
                    required
                    fullWidth
                    name="username"
                    disabled={formDisabled}
                    validations="isEmail,isExisty"
                    floatingLabelText="Your Email Address"
                    validationError="This isn't a valid email address"
                    value="e.coleridgesmith@edcs.me"
                />
                <FormsyText
                    required
                    fullWidth
                    type="password"
                    name="password"
                    disabled={formDisabled}
                    floatingLabelText="Your Password"
                    value="password"
                />
            </CardText>
            <CardActions style={{ textAlign: 'right' }}>
                <RaisedButton
                    primary
                    type="submit"
                    label="Sign In"
                    disabled={formDisabled}
                />
            </CardActions>
        </Card>
    </Form>
);

SignInForm.propTypes = {
    submitHandler: React.PropTypes.func,
    formDisabled: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
