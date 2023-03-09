import cors from 'cors';
import express from 'express';
import { errorHandler } from './utils/error-handler';

const app = express();

app.get('/', (_req, res) => {
  res.json('Server ON');
});

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use(errorHandler);

export default app;
