import Api from './Api';

class Patient extends Api {
    /**
     * A promise request for retrieving the patients available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index(params = { page: 1 }) {
        return this.get('patients', params);
    }

    /**
     * A promise request for retrieving a single patient.
     *
     * @param patientId
     * @param params
     * @return {*}
     */
    find(patientId, params = {}) {
        return this.get(`patients/${patientId}`, params);
    }
}

export default Patient;
