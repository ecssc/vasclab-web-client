import { connect } from 'react-redux';
import BaseSnackbar from '../components/Snackbar';
import { hideSnackbar } from '../state/actions';

const mapStateToProps = state => ({
    open: state.ui.snackbar.visible,
    action: state.ui.snackbar.action,
    message: state.ui.snackbar.message,
    autoHideDuration: state.ui.snackbar.autoHideDuration,
});

const mapDispatchToProps = dispatch => ({
    onRequestClose: () => dispatch(hideSnackbar()),
    onActionTouchTap: () => dispatch(hideSnackbar()),
});

const Snackbar = connect(mapStateToProps, mapDispatchToProps)(BaseSnackbar);

export default Snackbar;
