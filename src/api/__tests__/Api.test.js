jest.mock('superagent');
jest.mock('superagent-promise-plugin');

import client from 'superagent';
import promises from 'superagent-promise-plugin';

import Api from '../Api';

const api = new Api(client, promises, {
    url: 'https://api.vasclab.test/',
    client_id: 'client_id'
});

test('API can make POST requests', () => {
    api.post('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make GET requests', () => {
    api.get('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.query.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make PATCH requests', () => {
    api.patch('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.patch.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make PUT requests', () => {
    api.put('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.put.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make DELETE requests', () => {
    api.delete('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.delete.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.query.mock.calls[0][0]).toEqual({ foo: 'bar' });
});
