import { connect } from 'react-redux'
import NavMenu from '../components/NavMenu'
import { toggleMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    let type = state.browser.mediaType
    let visible = true

    if (type === 'small' || type === 'extraSmall') {
        visible = state.ui.mainNavVisible
    }

    return {
        docked: (type === 'infinity' || type === 'large' || type === 'medium'),
        visible: visible
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
