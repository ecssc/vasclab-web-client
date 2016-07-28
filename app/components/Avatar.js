import React from 'react';
import { connect } from 'react-redux';

import BaseAvatar from 'material-ui/lib/avatar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const Avatar = ({showAvatar, avatar, signOut}) => {
    if (showAvatar) {
        return (
            <IconMenu iconButtonElement={<BaseAvatar src={avatar} size={46} />}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem onTouchTap={signOut} primaryText="Sign out" />
            </IconMenu>
        );
    }

    return (<BaseAvatar size={0} />);
}

export default Avatar;

