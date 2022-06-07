import path from 'path';
import express from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import routes from './routes';
import { env } from 'process';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.resolve(__dirname, 'views'));

server.engine('mustache', mustache());
server.use(express.static(path.resolve(__dirname, '..', 'public')));

server.use(express.json());
server.use(routes);

server.listen(env.PORT);