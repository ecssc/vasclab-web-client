import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

const Toolbar = ({
    title,
    style,
    showNavButton,
    onLeftIconButtonTouchTap,
    iconElementRight,
    onRightIconButtonTouchTap
}) => (
    <AppBar title={title}
            style={style}
            showMenuIconButton={showNavButton}
            iconClassNameRight={'123'}
            onLeftIconButtonTouchTap={() => onLeftIconButtonTouchTap()}
            onRightIconButtonTouchTap={() => onRightIconButtonTouchTap()}
    />
)

Toolbar.propTypes = {
    title: PropTypes.string,
    onLeftIconButtonTouchTap: PropTypes.func,
}

export default Toolbar;
