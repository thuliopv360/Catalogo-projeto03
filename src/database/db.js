import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config()

export const connection = new Sequelize(
    process.env.DB_BASE,
    process.env.DB_USER,
    process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: 5432,
        dialect: 'postgres'
    });

// 'postgres://catalogo_user:hYufJeFEkkOzrYScgemn35BqUIniwWvT@dpg-c9qstbn5f999i81rov30-a/catalogo', 
// {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// }

//DB_URL = postgres: //catalogo_user:hYufJeFEkkOzrYScgemn35BqUIniwWvT@dpg-c9qstbn5f999i81rov30-a/catalogo
// no .env coloca isso