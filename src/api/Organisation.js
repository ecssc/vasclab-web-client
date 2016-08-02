import Api from './Api';

class Organisation extends Api {
    /**
     * A promise request for retrieving the organisations available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index(page = 1) {
        return this.get('organisations', {page: page});
    }

    /**
     * A promise request for retrieving the specified organisation's patients.
     *
     * @return {Promise}
     */
    patients(id, page = 1) {
        return this.get(`organisations/${id}/patients`, {page: page})
    }
}

export default Organisation;
