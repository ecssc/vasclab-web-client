import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { showMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        title: 'VascLab',
        showNavButton: state.ui.showNavButton
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLeftIconButtonTouchTap: () => {
            dispatch(showMainNav());
        }
    }
}

const MainToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default MainToolbar
