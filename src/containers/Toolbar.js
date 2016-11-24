import React from 'react';
import { connect } from 'react-redux';

import Avatar from './Avatar';
import BaseToolbar from '../components/Toolbar';

const mapStateToProps = () => {
    return {
        title: 'VascLab',
        style: { position: 'fixed', top: 0, zIndex: 2000 },
        iconElementRight: <Avatar />
    }
}

const Toolbar = connect(mapStateToProps)(BaseToolbar);

export default Toolbar;
