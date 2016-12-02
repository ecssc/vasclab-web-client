import Patient from '../Patient';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

const config = {
    url: 'https://api.vasclab.test/',
    client_id: 'client_id'
};

test('Patient index can be requested', () => {
    const patient = new Patient(client, promises, config);

    patient.index();

    expect(patient.client.get.mock.calls[0][0]).toEqual('https://api.vasclab.test/patients');
    expect(patient.client.query.mock.calls[0][0]).toEqual({ page: 1 });
});

test('Patient index can be requested with a query parameter', () => {
    const patient = new Patient(client, promises, config);

    patient.index({ page: 1, search: 'foo' });

    expect(patient.client.get.mock.calls[1][0]).toEqual('https://api.vasclab.test/patients');
    expect(patient.client.query.mock.calls[1][0]).toEqual({ page: 1, search: 'foo' });
});

test('Patient can be requested', () => {
    const patient = new Patient(client, promises, config);

    patient.find(1);

    expect(patient.client.get.mock.calls[2][0]).toEqual('https://api.vasclab.test/patients/1');
    expect(patient.client.query.mock.calls[2][0]).toEqual({});
});

test('Patient can be requested with a query parameter', () => {
    const patient = new Patient(client, promises, config);

    patient.find(1, { search: 'foo' });

    expect(patient.client.get.mock.calls[3][0]).toEqual('https://api.vasclab.test/patients/1');
    expect(patient.client.query.mock.calls[3][0]).toEqual({ search: 'foo' });
});

test('Patient can be updated', () => {
    const patient = new Patient(client, promises, config);

    patient.update(1, { foo: 'bar' });

    expect(patient.client.put.mock.calls[0][0]).toEqual('https://api.vasclab.test/patients/1');
    expect(patient.client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('Patient reports can be requested', () => {
    const patient = new Patient(client, promises, config);

    patient.reports(1);

    expect(patient.client.get.mock.calls[4][0]).toEqual('https://api.vasclab.test/patients/1/reports');
    expect(patient.client.query.mock.calls[4][0]).toEqual({ page: 1 });
});

test('Patient reports can be requested with a query parameter', () => {
    const patient = new Patient(client, promises, config);

    patient.reports(1, { page: 1, search: 'foo' });

    expect(patient.client.get.mock.calls[5][0]).toEqual('https://api.vasclab.test/patients/1/reports');
    expect(patient.client.query.mock.calls[5][0]).toEqual({ page: 1, search: 'foo' });
});