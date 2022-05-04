import { Sequelize } from "sequelize";
import { connection } from "../database/db.js"

export const catalogo = connection.define("catalogo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imdb: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        allowNull: false
    },
    estrelas: {
        type: Sequelize.INTEGER,
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

// export default catalogo

// module.exports = Catalogo;