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
    const processo = await Processo.find();
    res.status(200).json(processo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Pegar id
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const processo = await Processo.findOne({ _id: id });

    if (!processo) {
      res.status(422).json({ message: "Processo não encontrado!" });
      return;
    }

    res.status(200).json(processo);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, client } = req.body;
  const processo = {
    name,
    client,
  };

  try {
    const updateProcesso = await Processo.updateOne({ _id: id }, processo);

    if (updateProcesso.matchedCount === 0) {
      res.status(422).json({ message: "Processo nao encontrado!" });
    }
    res.status(200).json(processo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const processo = await Processo.findOne({ _id: id });

  if (!processo) {
    res.status(422).json({ message: "Processo não encontrado!" });
    return;
  }

  try {
    await Processo.deleteOne({ _id: id });

    res.status(200).json({ message: "Processo removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});


module.exports = router;
