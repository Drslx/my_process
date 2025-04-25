const mongoose = require("mongoose");

const Processo = mongoose.model("Processo", {
  name: String,
  client: String,
});

module.exports = Processo;
