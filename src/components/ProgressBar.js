import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';

const ProgressBar = ({visible}) => (
    <LinearProgress
        mode="indeterminate"
        style={{
            display: visible? 'block' : 'none',
            position: 'fixed',
            zIndex: 2500,
            top: 0
        }}
    />
)

export default ProgressBar;
