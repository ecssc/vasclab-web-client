import { connect } from 'react-redux';
import { patientFetch, patientUpdate, patientCardToggleEditForm } from '../state/actions';

import BasePatientCard from '../components/PatientCard';

const mapStateToProps = (state) => ({
    patient: state.patient.data,
    formDisabled: state.ui.formDisabled,
    showEditForm: state.ui.patientCard.showEditForm,
});

const mapDispatchToProps = (dispatch) => ({
    patientFetch: (patientId, queryParams = {}) => dispatch(patientFetch(patientId, queryParams)),
    submitHandler: (patientId, model) => dispatch(patientUpdate(patientId, model)),
    toggleEditForm: () => dispatch(patientCardToggleEditForm()),
});

const PatientCard = connect(mapStateToProps, mapDispatchToProps)(BasePatientCard);

export default PatientCard;
