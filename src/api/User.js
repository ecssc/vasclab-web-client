import Api from './Api';

class User extends Api {
    /**
     * A promise request for retrieving the currently authenticated user.
     *
     * @return {Promise}
     */
    me() {
        return this.get('users/me');
    }

    /**
     * A promise request for retrieving the currently authenticated user's organisations.
     *
     * @return {Promise}
     */
    organisations(id, params = { page: 1 }) {
        return this.get(`users/${id}/organisations`, params);
    }
}

export default User;
