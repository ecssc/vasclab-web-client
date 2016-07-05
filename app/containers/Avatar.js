import { connect } from 'react-redux';
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

const Avatar = connect(mapStateToProps)(BaseAvatar);

export default Avatar;
