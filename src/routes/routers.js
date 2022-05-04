import { getIndex /*getFilmes, getSeries, getAdicionar, getCategoria*/ } from '../controllers/Controlador.js';
import express from 'express';
export const routers = express.Router();
// export const routers = require('express').Router();
// import {CatalogoController} from "../controllers/CatalogoController.js";

// routers.get("/", CatalogoController.getAll);

// exports.default = routers;

// import express from 'express';

// export const routers = express.Router();

routers.get("/", getIndex);

// // routers.get("/filmes", getFilmes);

// // routers.get("/series", getSeries);

// // routers.get("/adicionar", getAdicionar);

// // routers.get("/categoria/:id", getCategoria);