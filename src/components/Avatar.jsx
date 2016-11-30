import React from 'react';

import AccountBox from 'material-ui/svg-icons/action/account-box';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import { fullWhite } from 'material-ui/styles/colors';

const Avatar = ({ showAvatar, user, signOut }) => {
    if (showAvatar) {
        return (
            <div>
                <IconMenu
                    iconButtonElement={
                        <IconButton>
                            <AccountBox color={fullWhite} />
                        </IconButton>
                    }
                    targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem
                        leftIcon={<AccountBox />}
                        primaryText={`${user.first_name} ${user.last_name}`}
                    />

                    <Divider />

                    <MenuItem
                        leftIcon={<Cancel />}
                        onTouchTap={signOut}
                        primaryText="Sign Out"
                    />
                </IconMenu>
            </div>
        );
    }

    return (<div />);
};

Avatar.propTypes = {
    showAvatar: React.PropTypes.bool,
    signOut: React.PropTypes.any,
    user: React.PropTypes.object,
};

export default Avatar;

