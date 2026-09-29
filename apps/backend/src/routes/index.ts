import { Hono } from 'hono';

import auth from '../modules/auth/auth.route';
import users from '../modules/users/users.route';

const routes = new Hono();
const api = new Hono();

api.route('/auth', auth);
api.route('/users', users);

routes.route('/api/v1', api);

export default routes;
