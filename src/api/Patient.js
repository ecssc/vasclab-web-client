import Api from './Api';

class Patient extends Api {
    /**
     * A promise request for retrieving the organisations available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index(page = 1) {
        return this.get('patients', {page: page});
    }
}

export default Patient;
