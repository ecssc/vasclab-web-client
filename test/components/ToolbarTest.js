import React from 'react';
import Chance from 'chance';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Toolbar from '../../src/components/Toolbar';

const chance = new Chance();

describe('[Component] Toolbar Test Suite', function() {

    it('can be instantiated', function() {
        shallow(
            <MuiThemeProvider>
                <Toolbar />
            </MuiThemeProvider>
        );
    });

    it('can show a title', function() {
        const title = chance.string();

        const toolbar = shallow(
            <MuiThemeProvider>
                <Toolbar title={title} />
            </MuiThemeProvider>
        );

        expect(toolbar.props().title).to.equal(title);
    });

    it('can use a custom style', function() {
        const toolbar = shallow(
            <MuiThemeProvider>
                <Toolbar style={{ foo: 'bar' }} />
            </MuiThemeProvider>
        );

        expect(toolbar.props().style).to.equal({ foo: 'bar' });
    });

});
