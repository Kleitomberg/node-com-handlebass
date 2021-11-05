const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.rcr4i.mongodb.net/crudNode?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" A conexão com o banco de dados foi um sucessoooo!");
  })
  .catch((err) => {
    console.log("falhoy" + err);
  });

module.exports = mongoose;
