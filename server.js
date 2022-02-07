const express = require('express'); //inportando o express
const app = express(); //instanciar o express e guardar na variavel app
const port = 8080;

app.set("view engine", "ejs"); //definir o tipo de renderização como ejs

app.get("/", (req, res) => { //cria uma rota raiz e renderiza o index
    const adjetives = [
        {
            title:'B',
            message: 'allsy'
        },
        {
            title: 'A',
            message: 'wesome'
        },
        {
            title: 'R',
            message: 'adiant'
        },
        {
            title: 'R',
            message: 'evolutionary'
        },
        {
            title: 'O',
            message: 'vermodest'
        },
        {
            title: 'S',
            message: 'mart'
        }
    ]
    res.render("pages/index", {
        qualitys: adjetives,
        title: 'Node + EJS',
        paragraph: 'Learning the work with EJS file'
    });
});

app.get("/about", (req, res) => {
    res.render("pages/about", {
        title: 'About me',
        paragraph: 'I´m José Bongo, Web Informátic student'
    });
});

app.listen(port, () => {
    console.log("Servidor executando na porta " + port);
});