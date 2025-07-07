import express from 'express';
import cors from 'cors';

import router from '../routes/chatgpt.route.js';

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      apigpt: '/api'
    }

    //Middlewares
    this.middlewares();

    //Rutas de aplicación
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y parsear body a json
    this.app.use(express.json());

    //Directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.apigpt, router);
  }

  listen() {
    this.app.listen(this.port, '0.0.0.0', () => {
      console.log('Server running ', this.port);
    })
  }
}
