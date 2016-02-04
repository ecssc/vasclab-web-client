import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { toggleMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        title: 'VascLab',
        showNavButton: state.ui.navButtonVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLeftIconButtonTouchTap: () => {
            dispatch(toggleMainNav());
        }
    }
}

const MainToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default MainToolbar
