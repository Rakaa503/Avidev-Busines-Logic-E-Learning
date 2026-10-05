import { Hono } from 'hono';

import auth from '../modules/auth/auth.route';
import users from '../modules/users/users.route';
import courses from '../modules/courses/courses.route';

const routes = new Hono();
const api = new Hono();

api.route('/auth', auth);
api.route('/users', users);
api.route('/courses', courses);

routes.route('/api/v1', api);

export default routes;
