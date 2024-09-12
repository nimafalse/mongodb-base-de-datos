const mongoose = require('mongoose');
const usuarioController = require('./controllers/usuarioController');

mongoose.connect('mongodb://localhost:27017/mi_basededatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado a MongoDB');

    usuarioController.crearUsuario('Juan Pérez', 30, 'juan@example.com');
    
    usuarioController.listarUsuarios();
})
.catch((error) => console.log('Error conectando a MongoDB:', error));
