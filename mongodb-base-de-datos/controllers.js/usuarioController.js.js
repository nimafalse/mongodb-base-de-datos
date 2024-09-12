const Usuario = require('../models/usuario');

const crearUsuario = (nombre, edad, correo) => {
    const nuevoUsuario = new Usuario({ nombre, edad, correo });

    nuevoUsuario.save()
        .then(() => console.log('Usuario guardado:', nombre))
        .catch((error) => console.log('Error guardando usuario:', error));
};

const listarUsuarios = () => {
    Usuario.find()
        .then(usuarios => console.log('Usuarios:', usuarios))
        .catch(error => console.log('Error consultando usuarios:', error));
};

module.exports = {
    crearUsuario,
    listarUsuarios
};
