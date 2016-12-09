import React from 'react';
import { shallow } from 'enzyme';
import Default from '../Default';

import MainNav from '../../containers/MainNav';
import ProgressBar from '../../containers/ProgressBar';
import Snackbar from '../../containers/Snackbar';
import Toolbar from '../../containers/Toolbar';

test('Default layout accepts title property', () => {
    const layout = shallow(
        <Default title={'Layout title'}>
            <div id="test-child-component" />
        </Default>
    );

    expect(layout.prop('title')).toEqual('Layout title');
});

test('Default layout renders child component', () => {
    const layout = shallow(
        <Default title={'Layout title'}>
            <div id="test-child-component" />
        </Default>
    );

    expect(layout.contains(<div id="test-child-component" />)).toEqual(true);
});

test('Default layout contains required components', () => {
    const layout = shallow(
        <Default title={'Layout title'}>
            <div id="test-child-component" />
        </Default>
    );

    expect(layout.contains(<MainNav />)).toEqual(true);
    expect(layout.contains(<ProgressBar />)).toEqual(true);
    expect(layout.contains(<Snackbar />)).toEqual(true);
    expect(layout.contains(<Toolbar />)).toEqual(true);
});