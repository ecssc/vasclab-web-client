import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { userAuthLogout } from '../../state/actions/user';

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    userAuthLogout: () => dispatch(userAuthLogout()),
});

class MainAppBar extends React.Component {
    iconElementRight() {
        if (this.props.user.account.id === null) {
            return (<FlatButton label="Sign In" href="/sign-in" />);
        }

        return (
            <FlatButton label="Sign Out" onTouchTap={this.props.userAuthLogout} />
        );
    }

    render() {
        return (
            <AppBar
                title="VascLab"
                iconElementRight={this.iconElementRight()}
            />
        );
    }
}

MainAppBar.propTypes = {
    user: React.PropTypes.shape({ account: React.PropTypes.object }).isRequired,
    userAuthLogout: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainAppBar);
