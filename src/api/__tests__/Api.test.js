import Api from '../Api';

import client from 'superagent';
import promises from 'superagent-promise-plugin';

const config = {
    url: 'https://api.vasclab.test/',
    client_id: 'client_id'
};

test('API can make POST requests', () => {
    const api = new Api(client, promises, config);

    api.post('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make GET requests', () => {
    const api = new Api(client, promises, config);

    api.get('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.post.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.query.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make PATCH requests', () => {
    const api = new Api(client, promises, config);

    api.patch('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.patch.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make PUT requests', () => {
    const api = new Api(client, promises, config);

    api.put('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.put.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.send.mock.calls[0][0]).toEqual({ foo: 'bar' });
});

test('API can make DELETE requests', () => {
    const api = new Api(client, promises, config);

    api.delete('resource/', { foo: 'bar' }, { Header: 'value' });

    expect(client.delete.mock.calls[0][0]).toEqual('https://api.vasclab.test/resource/');
    expect(client.set.mock.calls[0][0]).toEqual({ Header: 'value', Accept: 'application/vnd.vasclab.v1+json', });
    expect(client.query.mock.calls[0][0]).toEqual({ foo: 'bar' });
});
