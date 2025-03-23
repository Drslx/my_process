//require("dotenv").config()
const mongoose = require("mongoose");

const DB_USER = "drslxprogramador";
const DB_PASS = encodeURIComponent("wG9hgpAFpKBSTiV2");
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.3zo65.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;
