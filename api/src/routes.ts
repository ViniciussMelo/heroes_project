import express from "express";

import HeroesController from "./controllers/HeroesController";

const heroesController = new HeroesController();

const routes = express.Router();

routes.get('/heroes', heroesController.index);
routes.get('/heroes/:id', heroesController.getById);

export default routes;