import { put, call } from 'redux-saga/effects';
import { patientReportsFetch } from '../patient-reports-fetch';
import { patient } from '../../../api/client';
import { START_HTTP, COMPLETE_HTTP, PATIENT_REPORTS_FETCHED, SHOW_SNACKBAR } from '../../action-types';

describe('Patient Reports Fetch Saga', () => {

    it('can successfully call the API', () => {
        const generator = patientReportsFetch({ patientId: 123, queryParams: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(patient.reports, 123, { foo: 'bar'}));
        expect(generator.next().value).toEqual(put({ type: PATIENT_REPORTS_FETCHED }));
        expect(generator.next().value).toEqual(put({ type: COMPLETE_HTTP }));
    });

    it('can handle an error when calling the API', () => {
        const generator = patientReportsFetch({ patientId: 123, queryParams: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: START_HTTP }));
        expect(generator.next().value).toEqual(call(patient.reports, 123, { foo: 'bar'}));

        expect(generator.throw({}).value).toEqual(put({
            type: SHOW_SNACKBAR,
            state: { message: 'There was a problem loading your reports', action: 'Ok' },
        }));
    });

});
