import { connect } from 'react-redux';
import { userAuthLogout } from '../state/actions';

import BaseAvatar from '../components/Avatar';

const mapStateToProps = (state) => {
    if (state.user !== null) {
        return {
            avatar: state.user.avatar,
            firstName: state.user.first_name,
            showAvatar: true
        }
    }

    return {
        showAvatar: false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(userAuthLogout()),
    }
}

const Avatar = connect(mapStateToProps, mapDispatchToProps)(BaseAvatar);

export default Avatar;
