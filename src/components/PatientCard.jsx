import React from 'react';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Create from 'material-ui/svg-icons/content/create';
import Clear from 'material-ui/svg-icons/content/clear';

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { FormsyText, FormsyDate } from 'formsy-material-ui';
import { Row, Col } from 'react-flexbox-grid';
import { Form } from 'formsy-react';

import { date } from '../functions/dates';

class PatientCard extends React.Component {
    /**
     * Component will mount event handler.
     */
    componentWillMount() {
        this.props.patientFetch(this.props.patientId);
    }

    /**
     * Form submit handler.
     *
     * @param model
     */
    submitHandler(model) {
        this.props.submitHandler(this.props.patientId, model);
    }

    /**
     * Renders the correct buttons.
     *
     * @return {XML}
     */
    renderButtons() {
        if (this.props.showEditForm) {
            return (
                <div>
                    <RaisedButton
                        primary
                        type="submit"
                        icon={<Create />}
                        label="Save Changes"
                        style={{ marginRight: 10 }}
                    />
                    <RaisedButton
                        label="Cancel"
                        icon={<Clear />}
                        onTouchTap={this.props.toggleEditForm}
                    />
                </div>
            );
        }

        return (
            <div>
                <RaisedButton
                    primary
                    label="New Report"
                    icon={<ContentCopy />}
                    style={{ marginRight: 10 }}
                />
                <RaisedButton
                    label="Edit Patient"
                    icon={<Create />}
                    onTouchTap={this.props.toggleEditForm}
                />
            </div>
        );
    }

    /**
     * Renders the patient card component.
     *
     * @return {XML}
     */
    render() {
        if (this.props.patient.created_at === null) {
            return (<div />);
        }

        const subTitle = `${this.props.patient.first_name} has been a patient since 
                          ${date(this.props.patient.created_at)}`;

        return (
            <Form onValidSubmit={(model) => this.submitHandler(model)}>
                <Card style={{ marginBottom: 60 }} expanded={this.props.showEditForm}>
                    <CardHeader
                        title={this.props.patient.name}
                        subtitle={subTitle}
                        avatar={<Avatar icon={<PersonOutline />} />}
                    />
                    <CardText expandable>
                        <Row>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={2}>
                                        <FormsyText
                                            name="salutation"
                                            required
                                            value={this.props.patient.salutation}
                                            floatingLabelText="Title"
                                            validationError="Please Enter The Patient's Title"
                                            style={{ width: '100%' }}
                                            disabled={this.props.formDisabled}
                                        />
                                    </Col>
                                    <Col xs={10}>
                                        <FormsyText
                                            name="first_name"
                                            required
                                            value={this.props.patient.first_name}
                                            floatingLabelText="First Name"
                                            validationError="Please Enter The Patient's First Name"
                                            style={{ width: '100%' }}
                                            disabled={this.props.formDisabled}
                                        />
                                    </Col>
                                </Row>
                                <FormsyText
                                    name="last_name"
                                    required
                                    floatingLabelText="Last Name"
                                    value={this.props.patient.last_name}
                                    validationError="Please Enter The Patient's Last Name"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                                <FormsyDate
                                    name="dob"
                                    required
                                    formatDate={(selectedDate) => date(selectedDate)}
                                    value={(this.props.patient.dob === null) ? null : new Date(this.props.patient.dob)}
                                    floatingLabelText="Date Of Birth"
                                    validationError="Please Enter The Patient's Date Of Birth"
                                    textFieldStyle={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                                <FormsyText
                                    name="telephone"
                                    required
                                    value={this.props.patient.telephone}
                                    floatingLabelText="Phone Number"
                                    validationError="Please Enter The Patient's Phone Number"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                            </Col>
                            <Col xs={6}>
                                <FormsyText
                                    name="address[address_1]"
                                    required
                                    value={this.props.patient.address.address_1}
                                    floatingLabelText="Address"
                                    validationError="Please Enter The Patient's Address"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                                <FormsyText
                                    name="address[address_2]"
                                    value={this.props.patient.address.address_2}
                                    floatingLabelText="Street Name"
                                    validationError="Please Enter The Patient's Street Name"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                                <FormsyText
                                    name="address[postal_town]"
                                    required
                                    value={this.props.patient.address.postal_town}
                                    floatingLabelText="Town"
                                    validationError="Please Enter The Patient's Town"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                                <FormsyText
                                    name="address[postcode]"
                                    required
                                    value={this.props.patient.address.postcode}
                                    floatingLabelText="Postcode"
                                    validationError="Please Enter The Patient's Postcode"
                                    style={{ width: '100%' }}
                                    disabled={this.props.formDisabled}
                                />
                            </Col>
                        </Row>
                    </CardText>
                    <CardActions>
                        {this.renderButtons()}
                    </CardActions>
                </Card>
            </Form>
        );
    }
}

PatientCard.propTypes = {
    patient: React.PropTypes.object,
    patientId: React.PropTypes.string,
    showEditForm: React.PropTypes.bool,
    formDisabled: React.PropTypes.bool,
    toggleEditForm: React.PropTypes.any,
    submitHandler: React.PropTypes.any,
    patientFetch: React.PropTypes.any,
};

export default PatientCard;
