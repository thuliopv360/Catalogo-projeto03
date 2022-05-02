const Sequelize = require("sequilize");
const connection = require("../database/db");

const Catalogo = connection.define('catalogo', {
    id: {
        type: Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imdb: {
        type: Sequelize.INT,
        allowNull: false
    },
    ano_de_lancamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idioma: {
        type: Sequelize.STRING,
        allowNull: false
    },
    legenda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
        type: Sequelize.INT,
        allowNull: false
    },
    estrelas: {
        type: Sequelize.INT,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updateAt: false
});


module.exports = Catalogo;