const router = require("express").Router();
const Processo = require("../models/Processo.js");

// Criar dados
router.post("/", async (req, res) => {
  const { name, client } = req.body;
  const processo = {
    name,
    client,
  };

  if (!name) {
    res.status(422).json({ error: "Nome Obrigatorio!" });
  }

  try {
    await Processo.create(processo);
    res.status(201).json({ message: "Inserido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Pegar dados
router.get("/", async (req, res) => {
  try {
    const processos = await Processo.find();
    res.status(200).json(processos)
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
