import React from 'react';
import { Form } from 'formsy-react';
import { Row, Col } from 'react-flexbox-grid';
import { FormsyText, FormsyDate } from 'formsy-material-ui';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { date } from '../../functions/dates';

const PatientForm = ({ submitHandler, formDisabled, patient }) => (
    <Card>
        <Form onValidSubmit={submitHandler}>
            <CardHeader title={patient.name} />
            <CardText>
                <Row>
                    <Col xs={6}>
                        <Row>
                            <Col xs={2}>
                                <FormsyText
                                    name="salutation"
                                    required
                                    value={patient.salutation}
                                    floatingLabelText="Title"
                                    validationError="Please Enter The Patient's Title"
                                    style={{ width: '100%' }}
                                    disabled={formDisabled}
                                />
                            </Col>
                            <Col xs={10}>
                                <FormsyText
                                    name="firstname"
                                    required
                                    value={patient.first_name}
                                    floatingLabelText="First Name"
                                    validationError="Please Enter The Patient's First Name"
                                    style={{ width: '100%' }}
                                    disabled={formDisabled}
                                />
                            </Col>
                        </Row>
                        <FormsyText
                            name="lastname"
                            required
                            floatingLabelText="Last Name"
                            value={patient.last_name}
                            validationError="Please Enter The Patient's Last Name"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                        <FormsyDate
                            name="dob"
                            required
                            locale="en-GB"
                            formatDate={(selectedDate) => date(selectedDate)}
                            value={(patient.dob === null) ? null : new Date(patient.dob)}
                            floatingLabelText="Date Of Birth"
                            validationError="Please Enter The Patient's Date Of Birth"
                            textFieldStyle={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                        <FormsyText
                            name="phoneNumber"
                            required
                            value={patient.telephone}
                            floatingLabelText="Phone Number"
                            validationError="Please Enter The Patient's Phone Number"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                    </Col>
                    <Col xs={6}>
                        <FormsyText
                            name="address1"
                            required
                            value={patient.address.address_1}
                            floatingLabelText="Address"
                            validationError="Please Enter The Patient's Address"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                        <FormsyText
                            name="address2"
                            value={patient.address.address_2}
                            floatingLabelText="Street Name"
                            validationError="Please Enter The Patient's Street Name"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                        <FormsyText
                            name="postalTown"
                            required
                            value={patient.address.postal_town}
                            floatingLabelText="Town"
                            validationError="Please Enter The Patient's Town"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                        <FormsyText
                            name="postcode"
                            required
                            value={patient.address.postcode}
                            floatingLabelText="Postcode"
                            validationError="Please Enter The Patient's Postcode"
                            style={{ width: '100%' }}
                            disabled={formDisabled}
                        />
                    </Col>
                </Row>
            </CardText>

            <CardActions>
                <RaisedButton
                    type="submit"
                    primary={true}
                    label="Save"
                    disabled={formDisabled}
                />
            </CardActions>
        </Form>
    </Card>
);

PatientForm.propTypes = {
    submitHandler: React.PropTypes.func,
    formDisabled: React.PropTypes.bool,
    patient: React.PropTypes.object,
};

export default PatientForm;
