import { connection } from "../database/db.js";
import { catalogo } from "../models/Catalogo.js"
let message = "";
let type = "";


export const getIndex = async(req, res) => {
    try {

        setTimeout(() => {
            message = "";
            type = "";
        }, 1000);

        const listFilmes = await catalogo.findAll({
            order: [
                ["id", "ASC"]
            ]
        });
        res.render("index", { listFilmes, filmesPut: null, filmesDel: null, message, type });
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
        res.render("adicionar", { message, type });
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const create = async(req, res) => {
    try {
        const filmes = req.body;
        if (!filmes.titulo || !filmes.descricao || !filmes.ano_de_lancamento || !filmes.genero || !filmes.idioma || !filmes.legenda || !filmes.duracao || !filmes.estrelas || !filmes.imagem || !filmes.tipo) {
            message = "Preencha todos campos!";
            type = "warning";
            return res.redirect("/adicionar");
        }
        await catalogo.create(filmes);
        message = "Filme criado com sucesso!";
        type = "sucess";
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}

export const getById = async(req, res) => {
    try {
        const method = req.params.method;
        const listFilmes = await catalogo.findAll({
            order: [
                ["id", "ASC"]
            ]
        });
        const filmes = await catalogo.findByPk(req.params.id);

        if (method == 'put') {
            res.render("index", {
                listFilmes,
                filmesPut: filmes,
                filmesDel: null,
                message,
                type
            });
        } else {
            res.render("index", {
                listFilmes,
                filmesPut: null,
                filmesDel: filmes,
                message,
                type
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
        message = "Filme atualizado com sucesso!";
        type = "sucess";
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
            message = "Filme removido com sucesso!";
            type = "sucess";
            res.redirect("/")
        } catch (err) {
            res.status(500).send({ err: err.message });
        }
    }
    // module.exports = {
    // getAll,
    // };