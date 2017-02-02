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
     * Creates a promise for a post request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @return {Promise}
     */
    post(uri, data = {}, headers = {}) {
        return this.client.post(process.env.API_URL + uri)
                          .withCredentials()
                          .use(this.promises)
                          .set({ ...headers, ...this.initialHeaders })
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
    get(uri, query = {}, headers = {}) {
        return this.client.get(process.env.API_URL + uri)
                          .withCredentials()
                          .use(this.promises)
                          .set({ ...headers, ...this.initialHeaders })
                          .query(query);
    }

    /**
     * Creates a promise for a patch request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @return {Promise}
     */
    patch(uri, data = {}, headers = {}) {
        return this.client.patch(process.env.API_URL + uri)
                          .withCredentials()
                          .use(this.promises)
                          .set({ ...headers, ...this.initialHeaders })
                          .send(data);
    }

    /**
     * Creates a promise for a put request.
     *
     * @param {string} uri
     * @param {*} data
     * @param {*} headers
     * @return {Promise}
     */
    put(uri, data = {}, headers = {}) {
        return this.client.put(process.env.API_URL + uri)
                   .withCredentials()
                   .use(this.promises)
                   .set({ ...headers, ...this.initialHeaders })
                   .send(data);
    }

    /**
     * Creates a promise for a delete request.
     *
     * @param {string} uri
     * @param {*} query
     * @param {*} headers
     * @return {Promise}
     */
    delete(uri, query = {}, headers = {}) {
        return this.client.delete(process.env.API_URL + uri)
                          .withCredentials()
                          .use(this.promises)
                          .set({ ...headers, ...this.initialHeaders })
                          .query(query);
    }
}

export default Api;
