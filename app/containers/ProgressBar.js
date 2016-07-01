import { connect } from 'react-redux'
import BaseProgressBar from '../components/ProgressBar'

const mapStateToProps = (state) => {
    return {
        visible: state.ui.progressBarVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ProgressBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseProgressBar)

export default ProgressBar
