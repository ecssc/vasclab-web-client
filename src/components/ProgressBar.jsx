import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ visible }) => (
    <LinearProgress
        mode="indeterminate"
        style={{
            display: visible ? 'block' : 'none',
            position: 'fixed',
            zIndex: 2500,
            top: 0,
        }}
    />
);

ProgressBar.propTypes = {
    visible: React.PropTypes.bool,
};

export default ProgressBar;
