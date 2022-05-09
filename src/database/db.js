import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config()

export const connection = new Sequelize('postgres: //admin:NthraUDF7cBN3OkNnhitAQUkIeOjiC3m@dpg-c9s6arp0gd05vncnms3g-a.oregon-postgres.render.com/db_filme', {
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

// export const connection = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     port: 5432,
//     dialect: 'postgres'
// });

// module.exports = sequelize;

// });
//    ,{ host: process.env.DB_HOST,
//     port: 5432,
//     dialect: 'postgres'
// });// para fazer o codigo rodar com o banco de dados fake

// 'postgres://catalogo_user:hYufJeFEkkOzrYScgemn35BqUIniwWvT@dpg-c9qstbn5f999i81rov30-a/catalogo', 
//DB_URL = postgres: //catalogo_user:hYufJeFEkkOzrYScgemn35BqUIniwWvT@dpg-c9qstbn5f999i81rov30-a/catalogo
// no .env coloca isso