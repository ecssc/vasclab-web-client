import React from 'react';
import AppBar from 'material-ui/AppBar';

const Toolbar = ({
    title,
    style,
    showNavButton,
    iconElementRight,
}) => (
    <AppBar
        title={title}
        style={style}
        showMenuIconButton={showNavButton || false}
        iconElementRight={iconElementRight}
    />
);

Toolbar.propTypes = {
    title: React.PropTypes.string,
    style: React.PropTypes.object,
    showNavButton: React.PropTypes.bool,
    iconElementRight: React.PropTypes.object,
};

export default Toolbar;
