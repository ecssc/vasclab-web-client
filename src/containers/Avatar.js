import { connect } from 'react-redux';

import { userAuthLogout } from '../state/actions';
import BaseAvatar from '../components/Avatar';

const mapStateToProps = (state) => {
    if (state.user.account.id === null) {
        return {
            showAvatar: false,
        };
    }

    return {
        user: state.user.account,
        showAvatar: true,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(userAuthLogout()),
});

const Avatar = connect(mapStateToProps, mapDispatchToProps)(BaseAvatar);

export default Avatar;
