import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { toggleMainNav } from '../state/actions'

const mapStateToProps = (state) => {
    return {
        title: 'VascLab',
        showNavButton: false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MainToolbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar)

export default MainToolbar
