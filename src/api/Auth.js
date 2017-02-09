import Api from './Api';

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
            client_id: process.env.OAUTH_CLIENT_ID,
            grant_type: 'password',
            username,
            password,
        }, {}, false);
    }

    /**
     * A promise request for refreshing an access token.
     *
     * @return {Promise}
     */
    refreshToken() {
        return this.post('oauth/access_token', {
            client_id: process.env.OAUTH_CLIENT_ID,
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem(process.env.REFRESH_TOKEN_NAME),
        }, {}, false);
    }
}

export default Auth;
