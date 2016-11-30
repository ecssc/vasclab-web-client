import React from 'react'
import { Form } from 'formsy-react'
import { FormsyText }  from 'formsy-material-ui';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const EmailPasswordForm = ({ title, subtitle, buttonText, submitHandler, formDisabled }) => (
    <Card
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-150px',
            marginLeft: '-300px',
            height: '310px',
            width: '600px',
        }}
    >
        <Form onValidSubmit={submitHandler}>
            <CardHeader title={title} subtitle={subtitle} />
            <CardText>
                <div>
                    <FormsyText
                        name="username"
                        validations="isEmail"
                        required
                        floatingLabelText="Your Email Address"
                        validationError="Please Enter Your Email Address"
                        style={{ width: '570px' }}
                        disabled={formDisabled}
                    />
                </div>
                <div>
                    <FormsyText
                        name="password"
                        validations="isExisty"
                        required
                        type="password"
                        floatingLabelText="Your Password"
                        validationError="Please Enter Your Password"
                        style={{ width: '570px' }}
                        disabled={formDisabled}
                    />
                </div>
            </CardText>
            <CardActions style={{ textAlign: 'right' }}>
                <RaisedButton
                    type="submit"
                    primary
                    label={buttonText}
                    disabled={formDisabled}
                />
            </CardActions>
        </Form>
    </Card>
);

EmailPasswordForm.propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.element,
    buttonText: React.PropTypes.string,
    submitHandler: React.PropTypes.func,
    formDisabled: React.PropTypes.bool,
};

export default EmailPasswordForm;
