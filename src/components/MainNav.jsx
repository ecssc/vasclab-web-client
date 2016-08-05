import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';

const navigateTo = (event, menuItem) => {
    browserHistory.push(menuItem.key);
};

export default (organisation) => {
    if (organisation.id === null) {
        return (<div />);
    }

    return (
        <Menu onItemTouchTap={navigateTo}>
            <MenuItem
                key={`/${organisation.id}/patients`}
                primaryText="Patients"
                leftIcon={<PersonOutline />}
            />
            <MenuItem
                key={`/${organisation.id}/reports`}
                primaryText="Reports"
                leftIcon={<ContentCopy />}
            />
        </Menu>
    );
}
