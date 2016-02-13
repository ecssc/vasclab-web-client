import React from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

const EmailPasswordForm = ({title, subtitle, buttonText}) => {
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
            <CardHeader
                title={title}
                subtitle={subtitle}
            />
            <CardText>
                <div>
                    <TextField style={{width: '570px'}}
                               floatingLabelText="Your Email Address"
                    />
                </div>
                <div>
                    <TextField style={{width: '570px'}}
                               floatingLabelText="Your Password"
                               type="password"
                    />
                </div>
            </CardText>
            <CardActions>
                <RaisedButton
                    style={{float: 'right', marginTop: '-5px'}}
                    label={buttonText}
                    primary={true}
                />
            </CardActions>
        </Card>
    )
}

export default EmailPasswordForm;
