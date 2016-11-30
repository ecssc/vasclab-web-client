import client from 'superagent';
import promises from 'superagent-promise-plugin';

import config from '../config';

import Auth from './Auth';
import Organisation from './Organisation';
import Patient from './Patient';
import User from './User';

export const auth = new Auth(client, promises, config.api);
export const organisation = new Organisation(client, promises, config.api);
export const patient = new Patient(client, promises, config.api);
export const user = new User(client, promises, config.api);
