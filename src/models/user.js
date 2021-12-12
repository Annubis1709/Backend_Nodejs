/* ---- Importar Mongoose --- */
const { Schema } = require('mongoose');
/* ---- Crear un esquema de los datos ---- */
const userSchema = Schema({
    name: {
        type: 'string',
      },
    lastName: {
        type: 'string',
      },
    email: {
        type: 'string',
      },
    password: {
        type: 'string',
      },
  }, {
    collection: 'users',
  });

module.exports = model('User', userSchema);
