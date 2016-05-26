import React from 'react'
import { FormsyText }  from 'formsy-material-ui';
import { Form } from 'formsy-react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

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
                        <FormsyText name="email"
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
                                  style={{float: 'right', marginTop: '-5px'}}
                                  disabled={formDisabled}
                    />
                </CardActions>
            </Form>
        </Card>
    )
}

export default EmailPasswordForm;
