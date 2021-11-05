const mongoose = require("./dbMongoose"); //importa a conexão

//cria model de usuario
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String
  },
  cpf: {
    type: String
  },
  email: {
    type: String,
    require: true
  },
  telefone: {
    type: Number
  },
  senha: {
    type: String,
    require: true
  }
});

//refencia o o model com a colection do banco

mongoose.model("usuarios", UsuarioSchema);

//para adicionar dados no banco é preciso atribuir o model a outra variavel
const novoUsuario = mongoose.model("usuarios");

//exporta o modelo
module.exports = novoUsuario;
