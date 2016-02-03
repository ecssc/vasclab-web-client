import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';

const NavMenu = ({ title, docked, visible, closeNavMenu }) => (
    <div>
        <LeftNav
            docked={docked}
            open={visible}
            onRequestChange={() => {closeNavMenu()}}
        >
            <AppBar title={title} showMenuIconButton={false} />
        </LeftNav>
    </div>
)

NavMenu.propTypes = {
    title: PropTypes.string,
}

export default NavMenu;
