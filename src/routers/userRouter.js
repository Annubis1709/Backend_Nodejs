const { Router } = require('express');

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
  }
}

module.exports = UserRouter;
