import React from 'react';
import Chance from 'chance';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Avatar from '../../src/components/Avatar';

const chance = new Chance();

describe('[Component] Avatar Test Suite', function() {

    it('can be instantiated', function() {
        shallow(
            <MuiThemeProvider>
                <Avatar />
            </MuiThemeProvider>
        );
    });

    it('can be hidden', function() {
        const toolbar = shallow(
            <MuiThemeProvider>
                <Avatar showAvatar={false} />
            </MuiThemeProvider>
        );

        expect(toolbar.props().showAvatar).to.equal(false);
    });

    it('can have a user', function() {
        const id = chance.guid();
        const name = chance.name();
        const avatar = chance.url();

        const toolbar = shallow(
            <MuiThemeProvider>
                <Avatar user={{ id, name, avatar }} />
            </MuiThemeProvider>
        );

        expect(toolbar.props().user.id).to.equal(id);
        expect(toolbar.props().user.name).to.equal(name);
        expect(toolbar.props().user.avatar).to.equal(avatar);
    });

    it('can have a sign out action', function () {
        shallow(
            <MuiThemeProvider>
                <Avatar signOut={() => {}} />
            </MuiThemeProvider>
        );
    });

});
