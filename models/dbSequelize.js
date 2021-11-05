const { Sequelize } = require("sequelize");

//conexão com o banco

const sequelize = new Sequelize("cadastro", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conectado com sucesso");
  })
  .catch(function (erro) {
    console.log("Falha na conexão:" + erro);
  });

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};
