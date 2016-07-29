import Api from './Api';

class Organisation extends Api {
    /**
     * A promise request for retrieving the organisations available to the currently authenticated user.
     *
     * @return {Promise}
     */
    index() {
        return this.get('organisations');
    }
}

export default Organisation;
