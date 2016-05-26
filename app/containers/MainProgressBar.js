import { connect } from 'react-redux'
import ProgressBar from '../components/ProgressBar'

const mapStateToProps = (state) => {
    return {
        visible: state.ui.progressBarVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MainProgressBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar)

export default MainProgressBar
