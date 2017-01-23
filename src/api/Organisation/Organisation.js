import Api from '../Api';

class Organisation extends Api {
    /**
     * A promise request for retrieving the organisations available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index(params = { page: 1 }) {
        return this.get('organisations', params);
    }

    /**
     * A promise request for retrieving the specified organisation's patients.
     *
     * @param {int} id
     * @param {*} params
     * @return {Promise}
     */
    patients(id, params = { page: 1 }) {
        return this.get(`organisations/${id}/patients`, params);
    }

    /**
     * A promise request for retrieving an organisation's reports.
     *
     * @param {int} id
     * @param {*} params
     * @return {Promise}
     */
    reports(id, params = { page: 1 }) {
        return this.get(`organisations/${id}/reports`, params);
    }
}

export default Organisation;
