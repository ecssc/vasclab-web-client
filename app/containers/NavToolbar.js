import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { toggleMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    let type = state.browser.mediaType

    return {
        title: 'VascLab',
        showNavButton: (type === 'small' || type === 'extraSmall')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLeftIconButtonTouchTap: () => {
            dispatch(toggleMainNav());
        }
    }
}

const NavToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default NavToolbar
