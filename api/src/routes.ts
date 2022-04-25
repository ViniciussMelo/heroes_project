import express from "express";

import HeroesController from "./controllers/HeroesController";
import SessionController from "./controllers/SessionController";

const heroesController = new HeroesController();
const sessionController = new SessionController();

const routes = express.Router();

routes.get('/heroes', heroesController.index);
routes.get('/heroes/:id', heroesController.getById);

routes.post('/login', sessionController.verify);

export default routes;