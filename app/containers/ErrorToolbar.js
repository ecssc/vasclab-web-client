import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import colors from 'material-ui/lib/styles/colors';
import { hideErrorMessage } from '../state/actions';

const mapStateToProps = (state) => {
    return {
        title: state.ui.errorMessage.message,
        style: {
            zIndex: 1000,
            textAlign: 'center',
            backgroundColor: colors.pink400,
            top: state.ui.errorMessage.visible ? 64 : 0
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRightIconButtonTouchTap: () => {
            dispatch(hideErrorMessage());
        }
    }
}

const ErrorToolbar = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default ErrorToolbar;
