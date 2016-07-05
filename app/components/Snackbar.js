import React, { PropTypes } from 'react';
import BaseSnackbar from 'material-ui/lib/snackbar';

const Snackbar = ({open, message, action, autoHideDuration, onActionTouchTap, onRequestClose}) => (
    <BaseSnackbar open={open || false}
                  action={action || null}
                  message={message || ''}
                  onRequestClose={onRequestClose}
                  onActionTouchTap={onActionTouchTap}
                  autoHideDuration={autoHideDuration || 0}
    />
);

export default Snackbar;
