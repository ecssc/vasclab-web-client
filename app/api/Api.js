import client from 'superagent'
import promises from 'superagent-promise-plugin'

const URL = 'http://api.vasclab.app/';

class Api {
    /**
     * API wrapper constructor.
     */
    constructor() {
        this.client = client;
        this.headers = {
            'Accept': 'application/vnd.vasclab.v1+json'
        }
    }

    /**
     * Creates a promise for a post request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @return {Promise}
     */
    post(uri, data = {}, headers = {}) {
        return this.client.post(URL + uri)
                          .withCredentials()
                          .use(promises)
                          .set({...headers, ...this.headers})
                          .send(data);
    }

    /**
     * Creates a promise for a get request.
     *
     * @param {string} uri
     * @param {*} query
     * @param {*} headers
     * @return {Promise}
     */
    get(uri, query = {},  headers = {}) {
        return this.client.get(URL + uri)
                          .withCredentials()
                          .use(promises)
                          .set({...headers, ...this.headers})
                          .query(query);
    }
}

export default Api;
