import { connect } from 'react-redux';
import PatientForm from '../../components/forms/PatientForm';

const mapStateToProps = (state, action) => ({
    action: action.type,
    patient: state.patient.data,
    formDisabled: state.ui.formInputs.disabled,
});

const mapDispatchToProps = (dispatch) => ({
    submitHandler: (model) => console.log(model),
});

const PatientEditForm = connect(mapStateToProps, mapDispatchToProps)(PatientForm);

export default PatientEditForm;
