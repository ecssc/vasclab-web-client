import Auth from '../Auth';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

const config = {
    url: 'https://api.vasclab.test/',
    client_id: 'client_id'
};

test('Access token can be requested', () => {
    const auth = new Auth(client, promises, config);

    auth.accessToken('username', 'password');

    expect(auth.client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/oauth/access_token');

    expect(auth.client.send.mock.calls[0][0]).toEqual({
        grant_type: 'password',
        client_id: config.client_id,
        username: 'username',
        password: 'password',
    });
});

test('Token refresh can be requested', () => {
    const auth = new Auth(client, promises, config);

    auth.refreshToken();

    expect(auth.client.post.mock.calls[1][0]).toEqual('https://api.vasclab.test/oauth/access_token');

    expect(auth.client.send.mock.calls[1][0]).toEqual({
        grant_type: 'refresh_token',
        client_id: config.client_id,
    });
});

test('Token refresh can be revoked', () => {
    const auth = new Auth(client, promises, config);

    auth.revokeToken();

    expect(auth.client.delete.mock.calls[0][0]).toEqual('https://api.vasclab.test/oauth/access_token');
});