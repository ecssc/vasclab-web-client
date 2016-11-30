import { connect } from 'react-redux';
import BaseProgressBar from '../components/ProgressBar';

const mapStateToProps = state => ({
    visible: state.ui.progressBar.visible,
});

const ProgressBar = connect(mapStateToProps)(BaseProgressBar);

export default ProgressBar;
