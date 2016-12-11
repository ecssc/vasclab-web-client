import Organisation from '../Organisation';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

test('Organisation index can be requested', () => {
    const organisation = new Organisation(client, promises);

    organisation.index();

    expect(organisation.client.get.mock.calls[0][0]).toEqual('https://api.vasclab.test/organisations');
    expect(organisation.client.query.mock.calls[0][0]).toEqual({ page: 1 });
});

test('Organisation index can be requested with a query parameter', () => {
    const organisation = new Organisation(client, promises);

    organisation.index({ page: 1, search: 'foo' });

    expect(organisation.client.get.mock.calls[1][0]).toEqual('https://api.vasclab.test/organisations');
    expect(organisation.client.query.mock.calls[1][0]).toEqual({ page: 1, search: 'foo' });
});

test('Organisation patients can be requested', () => {
    const organisation = new Organisation(client, promises);

    organisation.patients(1);

    expect(organisation.client.get.mock.calls[2][0]).toEqual('https://api.vasclab.test/organisations/1/patients');
    expect(organisation.client.query.mock.calls[2][0]).toEqual({ page: 1 });
});

test('Organisation patients can be requested with a query parameter', () => {
    const organisation = new Organisation(client, promises);

    organisation.patients(1, { page: 1, search: 'foo' });

    expect(organisation.client.get.mock.calls[3][0]).toEqual('https://api.vasclab.test/organisations/1/patients');
    expect(organisation.client.query.mock.calls[3][0]).toEqual({ page: 1, search: 'foo' });
});

test('Organisation reports can be requested', () => {
    const organisation = new Organisation(client, promises);

    organisation.reports(1);

    expect(organisation.client.get.mock.calls[4][0]).toEqual('https://api.vasclab.test/organisations/1/reports');
    expect(organisation.client.query.mock.calls[4][0]).toEqual({ page: 1 });
});

test('Organisation reports can be requested with a query parameter', () => {
    const organisation = new Organisation(client, promises);

    organisation.reports(1, { page: 1, search: 'foo' });

    expect(organisation.client.get.mock.calls[5][0]).toEqual('https://api.vasclab.test/organisations/1/reports');
    expect(organisation.client.query.mock.calls[5][0]).toEqual({ page: 1, search: 'foo' });
});