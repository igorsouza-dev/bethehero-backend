import { Router } from 'express';
import OngsController from './app/controllers/OngsController';

const routes = Router();

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

export default routes;
