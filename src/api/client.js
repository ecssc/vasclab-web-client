import client from 'superagent';
import promises from 'superagent-promise-plugin';

import Auth from './Auth';
import Organisation from './Organisation';
import Patient from './Patient';
import User from './User';

export const auth = new Auth(client, promises);
export const organisation = new Organisation(client, promises);
export const patient = new Patient(client, promises);
export const user = new User(client, promises);
