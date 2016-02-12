import { connect } from 'react-redux'
import NoNavLayout from '../components/NoNavLayout'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoNavLayout)

export default LoginPage
