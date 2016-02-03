import { connect } from 'react-redux'
import NavMenu from '../components/NavMenu'
import { hideMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        title: '',
        docked: state.ui.mainNavDocked,
        visible: state.ui.mainNavVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeNavMenu: () => {
            dispatch(hideMainNav());
        }
    }
}

const MainNavMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu)

export default MainNavMenu
