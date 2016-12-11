import User from '../User';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

test('User can request themselves', () => {
    const user = new User(client, promises);

    user.me();

    expect(user.client.get.mock.calls[0][0]).toEqual('https://api.vasclab.test/users/me');
});

test('User organisations can be requested', () => {
    const user = new User(client, promises);

    user.organisations();

    expect(user.client.get.mock.calls[1][0]).toEqual('https://api.vasclab.test/users/me/organisations');
});

test('User organisations can be requested with id', () => {
    const user = new User(client, promises);

    user.organisations(1);

    expect(user.client.get.mock.calls[2][0]).toEqual('https://api.vasclab.test/users/1/organisations');
});

test('User organisations can be requested with a query parameter', () => {
    const user = new User(client, promises);

    user.organisations(1, { page: 1, search: 'foo' });

    expect(user.client.get.mock.calls[3][0]).toEqual('https://api.vasclab.test/users/1/organisations');
    expect(user.client.query.mock.calls[3][0]).toEqual({ page: 1, search: 'foo' });
});