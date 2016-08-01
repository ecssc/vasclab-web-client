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
    organisations(id) {
        return this.get(`users/${id}/organisations`)
    }
}

export default User;
