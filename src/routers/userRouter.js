const { Router } = require('express');
const UserController = require('../controllers/userController');

class UserRouter {
  constructor() {
    // Crear ruta como atributo de la clase
    this.router = Router();
    this.config();
  }

  config() {
    // Crear objeto UserController
    const userC = new UserController();
    this.router.post('/users', userC.register);
    this.router.post('/users/auth', userC.login);
    this.router.put('/users', userC.update);
  }
}

module.exports = UserRouter;
