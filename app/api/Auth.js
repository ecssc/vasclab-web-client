import Api from './Api';
import * as config from '../config.js';

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
            client_id: config.api.client_id,
            username: username,
            password: password
        })
    }
}

export default Auth;
