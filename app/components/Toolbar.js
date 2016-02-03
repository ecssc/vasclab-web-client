import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Toolbar = ({ title, showNavButton, onLeftIconButtonTouchTap }) => (
    <AppBar onLeftIconButtonTouchTap={() => onLeftIconButtonTouchTap()}
            showMenuIconButton={showNavButton}
            title={title}
            style={{
                position: 'fixed',
                zIndex: 2000,
                top: 0
            }}
    />
)

Toolbar.propTypes = {
    title: PropTypes.string,
    onLeftIconButtonTouchTap: PropTypes.func,
}

export default Toolbar;
