const Catalogo = require("../models/Catalogo");

const getAll = async(req, res) => {
    try {
        const catalogo = await Catalogo.findAll();
        res.render("index", { Catalogo });
    } catch (err) {
        res.status(500).send({ err: err.message });
    }
}


module.exports = {
    getAll,
};