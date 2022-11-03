const pedidoModel = require("../models/pedido.model");

const controlador = {
  async listar(req, res) {
    const result = await pedidoModel.find({ "detalle.estado": "P" });
    let datos = [];
    result.forEach(pedido => {
      const detalle = pedido.detalle;
      const pendientes = detalle.filter(elem => elem.estado == "P");
      datos = [...datos, ...pendientes];
    });
    res.json(datos);
  },
  async editar(req, res) {
    const { id } = req.params;
    try {
      const result = await pedidoModel.findOneAndUpdate(
        { "detalle._id": id },
        { "$set": { "detalle.$[det].estado": "E" } },
        {
          arrayFilters: [{ "det._id": { $eq: id } }],
          "new": true
        }
      );
      res.json(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};

module.exports = controlador;
