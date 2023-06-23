const express = require("express");

const router = express.Router();
router.use(express.json());

const ModelUser = require("../models/usuario");

router.get("/login", (req, res) => {
  res.send("Get all");
});
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});

router.post("/criaruser", async (req, res) => {
  try {
    const { email, senha, confirmaSenha } = req.body.data;
    console.log(email, senha);
    if (senha === confirmaSenha) {
      const usuarioCriado = await ModelUser.create({
        email: email,
        senha: senha,
      });
      // const res = await usuarioCriado.save();
      console.log(usuarioCriado);
      res.status(200).json({ msg: "usuario Criado", status: true });
    } else {
      res.status(401).json({ msg: "Senha não confere" });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
