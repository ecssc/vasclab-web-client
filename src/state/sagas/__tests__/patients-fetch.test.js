import { put, call } from 'redux-saga/effects';
import { patientsFetch } from '../patients-fetch';
import { organisation } from '../../../api/client';
import { START_HTTP, COMPLETE_HTTP, PATIENTS_FETCHED, SHOW_SNACKBAR } from '../../action-types';

describe('Patients Fetch Saga', () => {

    it('can successfully call the API', () => {
        const generator = patientsFetch({ organisationId: 123, queryParams: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(organisation.patients, 123, { foo: 'bar'}));
        expect(generator.next().value).toEqual(put({ type: PATIENTS_FETCHED }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

    it('can handle an error when calling the API', () => {
        const generator = patientsFetch({ organisationId: 123, queryParams: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(organisation.patients, 123, { foo: 'bar'}));

        expect(generator.throw({}).value).toEqual(put({
            type: SHOW_SNACKBAR,
            state: { message: 'There was a problem loading your patients', action: 'Ok' },
        }));
    });

});
