import { connection } from "../database/db.js";
import { catalogo } from "../models/Catalogo.js"

export const getIndex = async(req, res) => {
    try {
        const listFilmes = await catalogo.findAll();
        res.render("index", { listFilmes });
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}


export const getDetalhes = async(req, res) => {
    try {
        // const id = req.params.id;
        // const filmesDetalhes = await connection.query(`SELECT * FROM catalogo WHERE id = ${req.params.id}`);
        const filmesDetalhes = await catalogo.findByPk(req.params.id)
        res.render("detalhes.ejs", {
            filmesDetalhes
        });
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
}

// module.exports = {
//     getAll,
// };