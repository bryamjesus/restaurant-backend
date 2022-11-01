const mongoose = require('mongoose')
const Schema = mongoose.Schema

const platoSchema = new Schema({
  cliente: { type: String, required: true },
  mesa: { type: String, required: true },
  total: { type: String, required: true },
  fecha: { type: String, default: Date.now },
  detalle: {
    plato: { type: String, required: true },
    precio: { type: Number, required: true },
    // P: pendiente || C: cocinado || L: Listo || E: entregado
    estado: { type: String, default: 'P' }
  },
  estado: { type: String, default: 'A' } // A: activo || T: terminado || N: anulado
}, {
  versionKey: false
})

module.exports = mongoose.model('plato', platoSchema)