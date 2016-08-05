import { connect } from 'react-redux';
import { patientCardToggleEditForm } from '../state/actions';

import BasePatientCard from '../components/PatientCard';

const mapStateToProps = (state) => ({
    patient: state.patient.data,
    formDisabled: state.ui.formDisabled,
    showEditForm: state.ui.patientCard.showEditForm,
});

const mapDispatchToProps = (dispatch) => ({
    toggleEditForm: () => dispatch(patientCardToggleEditForm()),
    submitHandler: (model) => console.log(model),
});

const PatientCard = connect(mapStateToProps, mapDispatchToProps)(BasePatientCard);

export default PatientCard;
