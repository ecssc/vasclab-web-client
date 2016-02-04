import { connect } from 'react-redux'
import NavMenu from '../components/NavMenu'
import { toggleMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        docked: state.ui.mainNavDocked,
        visible: state.ui.mainNavVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMainNav: () => {
            dispatch(toggleMainNav());
        }
    }
}

const MainNavMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu)

export default MainNavMenu
