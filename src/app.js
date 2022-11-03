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
const usuarioRutas = require("./routes/usuario.route");
const platoRutas = require("./routes/plato.route");
const pedidoRutas = require("./routes/pedido.route");
const cocinaRutas = require("./routes/cocina.route");
const auth = require('./middlewares/auth')

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(cors());
app.use(express.static("public"));

app.use("/api/usuarios", usuarioRutas);
app.use((req, res, next) => {
  auth(req, res, next)
})

app.use("/api/categorias", categoriaRutas);
app.use("/api/platos", platoRutas);
app.use("/api/pedidos", pedidoRutas);
app.use("/api/cocina", cocinaRutas);


app.listen(3000, () => {
  console.log("Servidor iniciado en le puerto 3001");
});
