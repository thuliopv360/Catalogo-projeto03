require("dotenv").config();
const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const port = process.env.PORT || 3000;
const porta = 3000;
app.listen(porta, () => { console.log(`servidor rodando em http://localhost:${porta}`) });