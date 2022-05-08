// import { getIndex /*getFilmes, getSeries, getAdicionar, getCategoria*/ } from '../controllers/Controlador.js';
// import { CatalogoControler } from '../controllers/CatalogoController'
// const getAll = CatalogoControler.getAll
import {
    getIndex,
    getDetalhes,
    create_filme,
    create,
    getById,
    update,
    getTipo,
    getCategory,
    remove
} from '../controllers/CatalogoController.js';
import express from 'express';
export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/detalhes/:id", getDetalhes);
routers.get("/adicionar", create_filme);
routers.post("/create", create);
routers.get("/getById/:id/:method", getById);
routers.post("/update/:id", update);
routers.get("/tipo/:id", getTipo);
routers.get("/category/:id", getCategory);
routers.get("/remove/:id", remove);