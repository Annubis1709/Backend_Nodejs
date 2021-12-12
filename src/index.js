const express = require('express');
const morgan = require('morgan');
const UserRouter = require('./routers/userRouter');
const ConnDb = require('./database/connDb');

class Sever {
  constructor() {
    this.connDb = new ConnDb();
    /* ---- Crear aplicación express ---- */
    this.app = express();
    this.config();
  }

  config() {
    /* ---- Indicar que se procesarán datos en formato json en las peticiones a recibir ---- */
    this.app.use(express.json());
    /* ---- Indicar el uso de morgan para el monitoreo de las peticiones http ---- */
    this.app.use(morgan());
    /* ---- Configurar y almacenar el puerto por el cual se ejecutará el servidor ----- */
    this.app.set('port', process.env.PORT || 3000);
    /* ---- Crear rutas ---- */
    let router = express.Router();
    router.get('/', (req, res) => {
        res.status(200).json({ message: 'All O.K!' });
      });
    let userR = new UserRouter();
    /* ---- Agregar rutas a express ---- */
    this.app.use(router);
    this.app.use(userR.router);
    /* ---- Levantar / poner a la escucha el servidor --- */
    this.app.listen(this.app.get('port'), () => {
        console.log('Server running on port ==>>>:', this.app.get('port'));
      });

  }
}

new Sever();
