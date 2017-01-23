import * as client from './client';

import Auth from './Auth';
import Organisation from './Organisation';
import Patient from './Patient';
import User from './User';

test('Client returns instance of Auth()', () => {
    expect(client.auth).toBeInstanceOf(Auth);
});

test('Client returns instance of Organisation()', () => {
    expect(client.organisation).toBeInstanceOf(Organisation);
});

test('Client returns instance of Patient()', () => {
    expect(client.patient).toBeInstanceOf(Patient);
});

test('Client returns instance of User()', () => {
    expect(client.user).toBeInstanceOf(User);
});
