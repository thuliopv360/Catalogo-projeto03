import express from "express"
import { routers } from "./src/routes/routers.js"
import path from "path"
import dotenv from "dotenv"
dotenv.config();
// const routers = require("./src/routes/routers.js")

const app = express();
let __dirname = path.resolve(path.dirname(""))
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json);
app.use(routers);

const port = process.env.PORT || 3001;
const porta = 3001;
app.listen(porta, () => { console.log(`servidor rodando em http://localhost:${porta}`) });