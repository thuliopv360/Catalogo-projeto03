import { connection } from "../database/db.js";
import { catalogo } from "../models/Catalogo.js"

export const getIndex = async(req, res) => {
    try {
        const listFilmes = await catalogo.findAll();
        res.render("index", { listFilmes, filmesPut: null, filmesDel: null });
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}


export const getDetalhes = async(req, res) => {
    try {
        // const id = req.params.id;
        // const filmesDetalhes = await connection.query(`SELECT * FROM catalogo WHERE id = ${req.params.id}`);
        const filmesDetalhes = await catalogo.findByPk(req.params.id);
        res.render("detalhes.ejs", {
            filmesDetalhes
        });
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const create_filme = (req, res) => {
    try {
        res.render("adicionar");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const create = async(req, res) => {
    try {
        const filmes = req.body;
        if (!filmes) {
            return res.redirect("/create_filme");
        }
        await catalogo.create(filmes);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const getById = async(req, res) => {
    try {
        const method = req.params.method;
        const listFilmes = await catalogo.findAll();
        const filmes = await catalogo.findByPk(req.params.id);

        if (method == 'put') {
            res.render("index", {
                listFilmes,
                filmesPut: filmes,
                filmesDel: null
            });
        } else {
            res.render("index", {
                listFilmes,
                filmesPut: null,
                filmesDel: filmes
            });
        }
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const update = async(req, res) => {
    try {
        const filme = req.body;
        await catalogo.update(filme, { where: { id: req.params.id } });
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const getTipo = async(req, res) => {
    try {
        const id = req.params.id;
        // const filmesTipo = await connection.query(`SELECT tipo FROM catalogo WHERE tipo = ${req.params.id}`);
        if (id == "series") {
            res.render("series")
        }
        if (id == "filmes") {
            res.render("filmes")
        }
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const getCategory = async(req, res) => {
    try {
        const id = req.params.id;
        if (await catalogo.tipo == id) {
            res.render("categoria", { catalogo, id })
        }
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}


export const remove = async(req, res) => {
        try {
            await catalogo.destroy({ where: { id: req.params.id } });
            res.redirect("/")
        } catch (err) {
            res.status(500).send({ err: err.message });
        }
    }
    // module.exports = {
    // getAll,
    // };