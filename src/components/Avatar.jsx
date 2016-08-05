import React from 'react';

import BaseAvatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';

const chipSize = 46;

const Avatar = ({ showAvatar, user, signOut }) => {
    if (showAvatar) {
        const chip = (
            <Chip style={{ height: chipSize, borderRadius: chipSize / 2 }} labelStyle={{ lineHeight: `${chipSize}px` }}>
                <BaseAvatar src={user.avatar} style={{ height: chipSize, width: chipSize }} />
                {user.name}
            </Chip>
        );

        return (
            <IconMenu
                iconButtonElement={chip}
                targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem onTouchTap={signOut} primaryText="Sign out" />
            </IconMenu>
        );
    }

    return (<BaseAvatar size={0} />);
};

Avatar.propTypes = {
    showAvatar: React.PropTypes.bool,
    signOut: React.PropTypes.any,
    user: React.PropTypes.object,
};

export default Avatar;

