import React from 'react'
import { Form } from 'formsy-react'
import { FormsyText }  from 'formsy-material-ui';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const EmailPasswordForm = ({title, subtitle, buttonText, submitHandler, formDisabled}) => {
    return (
        <Card style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-150px',
            marginLeft: '-300px',
            height: '300px',
            width: '600px',
        }}>
            <Form onValidSubmit={submitHandler}>
                <CardHeader title={title} subtitle={subtitle}/>
                <CardText>
                    <div>
                        <FormsyText name="username"
                                    validations="isEmail"
                                    required
                                    floatingLabelText="Your Email Address"
                                    validationError="Please Enter Your Email Address"
                                    style={{width: '570px'}}
                                    disabled={formDisabled}
                        />
                    </div>
                    <div>
                        <FormsyText name="password"
                                    validations="isExisty"
                                    required
                                    type="password"
                                    floatingLabelText="Your Password"
                                    validationError="Please Enter Your Password"
                                    style={{width: '570px'}}
                                    disabled={formDisabled}
                        />
                    </div>
                </CardText>
                <CardActions>
                    <RaisedButton type="submit"
                                  primary={true}
                                  label={buttonText}
                                  style={{float: 'right'}}
                                  disabled={formDisabled}
                    />
                </CardActions>
            </Form>
        </Card>
    )
}

export default EmailPasswordForm;
