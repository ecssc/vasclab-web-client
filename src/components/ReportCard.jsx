import React from 'react';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { Form } from 'formsy-react';

class PatientCard extends React.Component {
    /**
     * Form submit handler.
     *
     * @param model
     */
    submitHandler(model) {
        console.log(model);
    }

    /**
     * Renders the patient report component.
     *
     * @return {XML}
     */
    render() {
        return (
            <Form onValidSubmit={(model) => this.submitHandler(model)}>
                <Card>
                    <CardHeader
                        title="title"
                        subtitle="subtitle"
                    />
                </Card>
            </Form>
        );
    }
}

PatientCard.propTypes = {
};

export default PatientCard;
