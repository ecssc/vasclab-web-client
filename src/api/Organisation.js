import Api from './Api';

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
     * @return {Promise}
     */
    patients(id, params = { page: 1 }) {
        return this.get(`organisations/${id}/patients`, params);
    }

    /**
     * A promise request for retrieving a patient's reports.
     *
     * @param patientId
     * @param params
     * @return {Promise}
     */
    reports(patientId, params = {}) {
        return this.get(`organisations/${patientId}/reports`, params);
    }
}

export default Organisation;
