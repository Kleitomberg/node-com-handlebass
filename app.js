const express = require("express"); //importando o express
const app = express();
const usuario = require("./models/Usuario");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//template engine

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas

app.get("/listagem", function (req, res) {
  res.render(
    "lista",
    usuario.find({}, () => {})
  );
});

app.get("/login", function (req, res) {
  res.render("login", { title: "Login - Faça se login na plataforma" });
});

app.get("/cadastro", function (req, res) {
  res.render("cadastro", { title: "Cadastro - Cadastre-se" });
});

app.post("/cads", function (req, res) {
  new usuario({
    nome: req.body.fullname,
    cpf: req.body.cpf,
    email: req.body.email,
    tefone: req.body.telefone,
    senha: req.body.senha
  })
    .save()
    .then(() => {
      res.redirect("/listagem");
    })
    .catch((err) => {
      res.send("falha ao cadastrar " + err);
    });
});

app.delete("/deletarusuario/:id", function (req, res) {});

//iniciando servidor na porta 3000

app.listen(3000);
