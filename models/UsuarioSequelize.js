const db = require("./db"); //importandi a conexão com o banco do arquivo db.js

//dEFINE A ESTRUTURA DA TABELA USUARIO
const Usuario = db.sequelize.define("usuarios", {
  nome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  cpf: {
    type: db.Sequelize.INTEGER
  },
  telefone: {
    type: db.Sequelize.INTEGER
  },
  senha: {
    type: db.Sequelize.STRING
  }
});

//Usuario.sync({ force: true }); //executar uma unica vez

module.exports = Usuario;
