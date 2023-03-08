import express from 'express';
import log from './logger.js';
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Server ON');
});

app.listen(port, () => {
  log.info(`Example app listening on port ${port}`);
});

export default app;
