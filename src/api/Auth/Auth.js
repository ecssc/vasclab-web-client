import Api from '../Api';

class Auth extends Api {
    /**
     * A promise request for creating a new access token.
     *
     * @param {string} username
     * @param {string} password
     * @return {Promise}
     */
    accessToken(username, password) {
        return this.post('oauth/access_token', {
            grant_type: 'password',
            client_id: process.env.OAUTH_CLIENT_ID,
            username,
            password,
        });
    }

    /**
     * A promise request for refreshing an access token.
     *
     * @return {Promise}
     */
    refreshToken() {
        return this.post('oauth/access_token', {
            grant_type: 'refresh_token',
            client_id: process.env.OAUTH_CLIENT_ID,
        });
    }

    /**
     * A promise request for revoking an access token.
     *
     * @return {Promise}
     */
    revokeToken() {
        return this.delete('oauth/access_token');
    }
}

export default Auth;
