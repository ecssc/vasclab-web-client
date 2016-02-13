import { connect } from 'react-redux'
import MainNavComponent from '../components/MainNav'
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

const MainNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNavComponent)

export default MainNav
