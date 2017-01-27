import { call } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { userAuthSuccess } from '../user-auth-success';
import { } from '../../action-types';

describe('User Auth Success Saga', () => {

    it('can login a user with no organisation', () => {
        const generator = userAuthSuccess({ organisation: null });

        expect(generator.next().value).toEqual(undefined);
    });

    it('can login a user with an organisation', () => {
        const generator = userAuthSuccess({ organisation: { id: 123 } });

        expect(generator.next().value).toEqual(call(browserHistory.push, '/123'));
    });

});
