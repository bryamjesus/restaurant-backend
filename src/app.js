const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/restaurante")
  .then(() => {
    console.log("Conectados a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar DB: ", error);
  });

const categoriaRutas = require("./routes/categoria.route");
const usuarioRutas = require("./routes/usuario.controller");

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(cors());
app.use(express.static("public"));
app.use("/api/categorias", categoriaRutas);
app.use("/api/usuarios", usuarioRutas);

app.listen(3000, () => {
  console.log("Servidor iniciado en le puerto 3001");
});