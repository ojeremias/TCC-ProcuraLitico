const express = require("express");

const router = express.Router();
router.use(express.json());

const ModelUser = require("../models/usuario");

router.post("/login", async (req, res) => {
  console.log(req.body);

  const user = await ModelUser.findOne({ where: { email: req.body.email } })

  if (!user) {
    res.send("email ivalido")
    return
  }

  if (user.dataValues.senha === req.body.senha) {
    res.json({
      status: "OK"
    })
    return
  }

  res.send("senha ivalida")


});
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});

router.post("/criaruser", async (req, res) => {
  try {
    console.log("vack");
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
