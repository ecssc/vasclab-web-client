import React, { PropTypes } from 'react';
import BaseSnackbar from 'material-ui/Snackbar';

const Snackbar = ({ open, message, action, autoHideDuration, onActionTouchTap, onRequestClose }) => (
    <BaseSnackbar
        open={open || false}
        action={action || null}
        message={message || ''}
        onRequestClose={onRequestClose}
        onActionTouchTap={onActionTouchTap}
        autoHideDuration={autoHideDuration}
    />
);

Snackbar.propTypes = {
    open: React.PropTypes.bool,
    action: React.PropTypes.any,
    message: React.PropTypes.string,
    autoHideDuration: React.PropTypes.number,
    onActionTouchTap: React.PropTypes.any,
    onRequestClose: React.PropTypes.any,
};

export default Snackbar;
