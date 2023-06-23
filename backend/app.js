const express = require("express");
const routesProcuralico = require("./routers/procuralitico");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api", routesProcuralico);

app.listen(3500, async () => {
  const result = await db.sync({});
  console.log("Server started");
});
