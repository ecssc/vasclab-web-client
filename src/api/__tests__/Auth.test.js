import Auth from '../Auth';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

test('Access token can be requested', () => {
    const auth = new Auth(client, promises);

    auth.accessToken('username', 'password');

    expect(auth.client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/oauth/access_token');

    expect(auth.client.send.mock.calls[0][0]).toEqual({
        grant_type: 'password',
        client_id: process.env.OAUTH_CLIENT_ID,
        username: 'username',
        password: 'password',
    });
});

test('Token refresh can be requested', () => {
    const auth = new Auth(client, promises);

    auth.refreshToken();

    expect(auth.client.post.mock.calls[1][0]).toEqual('https://api.vasclab.test/oauth/access_token');

    expect(auth.client.send.mock.calls[1][0]).toEqual({
        grant_type: 'refresh_token',
        client_id: process.env.OAUTH_CLIENT_ID,
    });
});

test('Token refresh can be revoked', () => {
    const auth = new Auth(client, promises);

    auth.revokeToken();

    expect(auth.client.delete.mock.calls[0][0]).toEqual('https://api.vasclab.test/oauth/access_token');
});