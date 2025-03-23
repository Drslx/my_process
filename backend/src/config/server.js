const express = require("express");
const app = express();
const port = 3000;
const processoRoutes = require("../routes/processoRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas API
app.use("/processo", processoRoutes);

// Nodejs endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
// Nodejs event
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
