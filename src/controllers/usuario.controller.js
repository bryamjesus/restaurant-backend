const usuarioModel = require("../models/usuario.model");

const controlador = {
  async listar(req, res) {
    try {
      const result = await usuarioModel.find();
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async guardar(req, res) {
    const { tipo, nombres, email, password } = req.body;
    const dato = new usuarioModel();
    dato.tipo = tipo;
    dato.nombres = nombres;
    dato.email = email;
    dato.password = password;
    try {
      const result = await dato.save();
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const result = await usuarioModel.findById(id);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async editar(req, res) {
    const { id } = req.params;
    const { tipo, nombres, email, password, estado } = req.body;
    const datos = {
      tipo,
      nombres,
      email,
      password,
      estado,
    };
    try {
      const result = await usuarioModel.findByIdAndUpdate(id, datos, { "new": true });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
  async eliminar(req, res) {
    try {
      const { id } = req.params;
      await usuarioModel.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
};

module.exports = controlador;
