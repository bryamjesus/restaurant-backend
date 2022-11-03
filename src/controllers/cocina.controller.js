const pedidoModel = require("../models/pedido.model");

const controlador = {
  async listar(req, res) {
    const result = await pedidoModel.find({ "detalle.estado": "P" });
    res.json(result);
  },
  async editar(req, res) {
    const { id } = req.params;
    try {
      const result = await pedidoModel.findOneAndUpdate(
        { "detalle._id": id },
        { "$set": { "detalle.$[det].estado": "L" } },
        {
          arrayFilters: [{ "det._id": { $eq: id } }],
          "new": true
        }
      );
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

module.exports = controlador;
