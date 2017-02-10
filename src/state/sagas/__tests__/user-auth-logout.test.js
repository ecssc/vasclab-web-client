import lockr from 'lockr';
import { call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { userAuthLogout } from '../user-auth-logout';

describe('User Auth Logout Saga', () => {

    it('can successfully flush localStorage', () => {
        const generator = userAuthLogout();

        expect(generator.next().value).toEqual(call(lockr.flush));
        expect(generator.next().value).toEqual(call(browserHistory.push, '/login'));
    });

});
