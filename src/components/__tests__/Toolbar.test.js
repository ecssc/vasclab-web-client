import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../Toolbar';

test('Toolbar accepts title property', () => {
    const toolbar = shallow(<Toolbar title={'Toolbar title'} />);

    expect(toolbar.prop('title')).toEqual('Toolbar title');
});

test('Toolbar accepts style property', () => {
    const toolbar = shallow(<Toolbar style={{ foo: 'bar' }} />);

    expect(toolbar.prop('style')).toEqual({ foo: 'bar' });
});

test('Toolbar accepts show nav button property', () => {
    const toolbar = shallow(<Toolbar showNavButton={true} />);

    expect(toolbar.prop('showMenuIconButton')).toEqual(true);
});

test('Toolbar accepts hides nav button by default', () => {
    const toolbar = shallow(<Toolbar />);

    expect(toolbar.prop('showMenuIconButton')).toEqual(false);
});

test('Toolbar accepts icon element right property', () => {
    const toolbar = shallow(<Toolbar iconElementRight={<div id="icon-element-right" />} />);

    expect(toolbar.prop('iconElementRight')).toEqual(<div id="icon-element-right" />);
});