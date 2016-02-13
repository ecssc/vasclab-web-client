import React, { PropTypes } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';

const MainNav = ({ docked, visible, toggleMainNav }) => (
    <div>
        <LeftNav
            docked={docked}
            open={visible}
            onRequestChange={() => toggleMainNav()}
        >
        </LeftNav>
    </div>
)

MainNav.propTypes = {
    title: PropTypes.string,
}

export default MainNav;
