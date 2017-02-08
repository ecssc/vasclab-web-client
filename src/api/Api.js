import lockr from 'lockr';

class Api {
    /**
     * API wrapper constructor.
     */
    constructor(client, promises) {
        this.client = client;
        this.promises = promises;

        this.initialHeaders = {
            Accept: 'application/vnd.vasclab.v1+json',
        };
    }

    /**
     * Returns the request headers, with or without an authorization JWT.
     *
     * @param {Boolean} withAuthHeaders
     * @returns {*}
     */
    headers(withAuthHeaders) {
        const headers = this.initialHeaders;

        if (withAuthHeaders) {
            headers.Authorization = `Bearer ${lockr.get('jwt') || ''}`;
        }

        return headers;
    }

    /**
     * Returns a promise which times out after the specified number of milliseconds.
     *
     * @param {Number} ms
     * @returns {Promise}
     */
    timeout(ms = 5000) {
        return new Promise((resolve, reject) => {
            setTimeout(reject, ms, { error: 'Network Timeout' });
        });
    }

    /**
     * Creates a promise for a post request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @param {Boolean} withAuthHeaders
     * @return {Promise}
     */
    post(uri, data = {}, headers = {}, withAuthHeaders = true) {
        const promise = this.client
            .post(process.env.API_URL + uri)
            .use(this.promises)
            .set({ ...headers, ...this.headers(withAuthHeaders) })
            .send(data);

        return Promise.race([this.timeout(), promise]);
    }

    /**
     * Creates a promise for a get request.
     *
     * @param {string} uri
     * @param {*} query
     * @param {*} headers
     * @param {Boolean} withAuthHeaders
     * @return {Promise}
     */
    get(uri, query = {}, headers = {}, withAuthHeaders = true) {
        const promise = this.client
            .get(process.env.API_URL + uri)
            .use(this.promises)
            .set({ ...headers, ...this.headers(withAuthHeaders) })
            .query(query);

        return Promise.race([this.timeout(), promise]);
    }

    /**
     * Creates a promise for a patch request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @param {Boolean} withAuthHeaders
     * @return {Promise}
     */
    patch(uri, data = {}, headers = {}, withAuthHeaders = true) {
        const promise = this.client
            .patch(process.env.API_URL + uri)
            .use(this.promises)
            .set({ ...headers, ...this.headers(withAuthHeaders) })
            .send(data);

        return Promise.race([this.timeout(), promise]);
    }

    /**
     * Creates a promise for a put request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @param {Boolean} withAuthHeaders
     * @return {Promise}
     */
    put(uri, data = {}, headers = {}, withAuthHeaders = true) {
        const promise = this.client
            .put(process.env.API_URL + uri)
            .use(this.promises)
            .set({ ...headers, ...this.headers(withAuthHeaders) })
            .send(data);

        return Promise.race([this.timeout(), promise]);
    }

    /**
     * Creates a promise for a delete request.
     *
     * @param {string} uri
     * @param {*} query
     * @param {*} headers
     * @param {Boolean} withAuthHeaders
     * @return {Promise}
     */
    delete(uri, query = {}, headers = {}, withAuthHeaders = true) {
        const promise = this.client
            .delete(process.env.API_URL + uri)
            .use(this.promises)
            .set({ ...headers, ...this.headers(withAuthHeaders) })
            .query(query);

        return Promise.race([this.timeout(), promise]);
    }
}

export default Api;
