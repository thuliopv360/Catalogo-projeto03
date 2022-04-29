const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.render("index")
})


































const porta = 3000;

app.listen(porta, () => { console.log(`servidor rodando em http://localhost:${porta}`) });