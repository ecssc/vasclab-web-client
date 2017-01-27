import { put, call } from 'redux-saga/effects';
import { patientUpdate } from '../patient-update';
import { patient } from '../../../api/client';
import * as actions from '../../action-types';

describe('Patient Update Saga', () => {

    it('can successfully call the API', () => {
        const generator = patientUpdate({ patientId: 123, model: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: actions.START_HTTP }));
        expect(generator.next().value).toEqual(put({ type: actions.HIDE_SNACKBAR }));
        expect(generator.next().value).toEqual(call(patient.update, 123, { foo: 'bar'}));
        expect(generator.next().value).toEqual(put({ type: actions.PATIENT_FETCHED }));

        expect(generator.next().value).toEqual(put({
            type: actions.SHOW_SNACKBAR,
            state: {
                message: 'Your patient\'s details have been updated',
                action: 'Ok',
            }
        }));

        expect(generator.next().value).toEqual(put({ type: actions.COMPLETE_HTTP }));
    });

    it('can handle an error when calling the API', () => {
        const generator = patientUpdate({ patientId: 123, model: { foo: 'bar'} });

        expect(generator.next().value).toEqual(put({ type: actions.START_HTTP }));
        expect(generator.next().value).toEqual(put({ type: actions.HIDE_SNACKBAR }));
        expect(generator.next().value).toEqual(call(patient.update, 123, { foo: 'bar'}));

        expect(generator.throw({}).value).toEqual(put({
            type: actions.SHOW_SNACKBAR,
            state: { message: 'There was a problem updating your patient', action: 'Ok' },
        }));
    });

});
