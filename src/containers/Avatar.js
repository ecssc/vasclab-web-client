import { connect } from 'react-redux';
import { userAuthLogout } from '../state/actions';
import BaseAvatar from '../components/Avatar';

const mapStateToProps = (state) => {
    if (state.user !== null) {
        return {
            user: state.user.account,
            showAvatar: true,
        };
    }

    return {
        showAvatar: false,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(userAuthLogout()),
    };
};

const Avatar = connect(mapStateToProps, mapDispatchToProps)(BaseAvatar);

export default Avatar;
