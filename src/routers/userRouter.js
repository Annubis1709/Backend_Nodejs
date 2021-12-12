const {Router} = require('express');

class UserRouter {
  constructor() {
    // Crear ruta como atributo de la clase
    this.router = Router();
    this.config();
  }

  config() {
    this.router.get('/users', (req, res) => {
      res.status(200).json(
          [
            {name: 'Edier', lastName: 'Sanchez'},
            {name: 'katherine', lastName: 'Salas'},
          ]);
    });
    this.router.post('/users', (req, res) => {
      let {name, lastName, email} = req.body;
      console.log('name: ', name);
      console.table(req.body);
      res.status(201).json({message: 'user created'});

    });
  }
}

module.exports = UserRouter;
