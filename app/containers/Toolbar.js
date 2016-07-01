import { connect } from 'react-redux'
import BaseToolbar from '../components/Toolbar'

const mapStateToProps = () => {
    return {
        title: 'VascLab',
        showNavButton: false,
        style: { position: 'fixed', top: 0, zIndex: 2000 }
    }
}

const NoNavToolbar = connect(mapStateToProps)(BaseToolbar)

export default NoNavToolbar
