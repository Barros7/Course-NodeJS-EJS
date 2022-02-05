const express = require('express'); //inportando o express
const app = express(); //instanciar o express e guardar na variavel app
const port = 8080;

app.set("view engine", "ejs"); //definir o tipo de renderização como ejs

app.get("/", (req, res) => { //cria uma rota raiz e renderiza o index
    res.render("pages/index");
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.listen(port, () => {
    console.log("Servidor executando na porta " + port);
});