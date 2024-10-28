import express from 'express';
import './server/src/main.js';
import next from 'next';
import indexRoute from './server/src/routes/route.js';
import dotenv from 'dotenv';
import { shutdown } from './server/src/middleware/shutdown.js';
import cors from 'cors';
import globalResponseController from './server/src/helpers/Globalresponse.js';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();
const server = express();

app.prepare().then(() => {

server.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
	methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
	credentials: true
}));

  server.use(express.json());
  server.use('/api', indexRoute);
  server.use(globalResponseController);
  
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  const PORT = process.env.PORT;

  const listener = server.listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`Listening on  http://localhost:${PORT} ✅`);
    console.log('🤵', 'logged');
  });

  process.on('SIGTERM', ()=> shutdown(listener));
  process.on('SIGINT', ()=> shutdown(listener));

}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});


