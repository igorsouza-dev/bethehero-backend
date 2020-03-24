import { Router } from 'express';
import OngsController from './app/controllers/OngsController';
import IncidentsController from './app/controllers/IncidentsController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.get('/incidents/:id', IncidentsController.show);
routes.delete('/incidents/:id', IncidentsController.destroy);
routes.put('/incidents/:id', IncidentsController.update);

routes.get('/profile', ProfileController.index);

export default routes;
