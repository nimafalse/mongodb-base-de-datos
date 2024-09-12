const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    correo: { type: String, required: true, unique: true }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
