import Api from './Api';

class User extends Api {
    /**
     * A promise request for retrieving the currently authenticated user.
     *
     * @return {Promise}
     */
    me() {
        return this.get('users/me')
    }
}

export default User;
