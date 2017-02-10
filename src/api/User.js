import Api from './Api';

class User extends Api {
    /**
     * A promise request for retrieving the currently authenticated user.
     *
     * @param {*} query
     * @return {Promise}
     */
    me(query = {}) {
        return this.get('users/me', query);
    }

    /**
     * A promise request for retrieving the currently authenticated user's organisations.
     *
     * @param {String} id
     * @param {*} query
     * @return {Promise}
     */
    organisations(id = 'me', query = { page: 1 }) {
        return this.get(`users/${id}/organisations`, query);
    }
}

export default User;
