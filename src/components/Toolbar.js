import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Toolbar = ({
    title,
    style,
    showNavButton,
    onLeftIconButtonTouchTap,
    iconElementRight,
}) => (
    <AppBar title={title}
            style={style}
            showMenuIconButton={showNavButton || false}
            onLeftIconButtonTouchTap={() => onLeftIconButtonTouchTap()}
            iconElementRight={iconElementRight}
    />
);

export default Toolbar;
