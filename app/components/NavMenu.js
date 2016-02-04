import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';

const NavMenu = ({ docked, visible, toggleMainNav }) => (
    <div>
        <LeftNav
            docked={docked}
            open={visible}
            onRequestChange={() => toggleMainNav()}
        >
        </LeftNav>
    </div>
)

NavMenu.propTypes = {
    title: PropTypes.string,
}

export default NavMenu;
