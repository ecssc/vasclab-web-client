import Api from './Api';

class Patient extends Api {
    /**
     * A promise request for retrieving the organisations available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index() {
        return this.get('patients');
    }
}

export default Patient;
