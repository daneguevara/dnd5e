import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 6969;

app.use(morgan('short'));

app.all('/', (req, res) => {
  res.send('hello');
})

const start = () => {
  cs.info(`Starting dnd5e api on port ${port}`);
  return app.listen(port);
}

export default {
  start
}
