import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OngsController from './app/controllers/OngsController';
import IncidentsController from './app/controllers/IncidentsController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number()
        .required()
        .min(10),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2),
    }),
  }),
  OngsController.store
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentsController.index
);
routes.post(
  '/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      ong_id: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number()
        .required()
        .min(10),
    }),
  }),
  IncidentsController.store
);
routes.get('/incidents/:id', IncidentsController.show);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentsController.destroy
);
routes.put('/incidents/:id', IncidentsController.update);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      ong_id: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

export default routes;
