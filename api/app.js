import express from 'express';
import graphql from 'express-graphql';
import morgan from 'morgan';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();
const port = 6969;

app.use(morgan('short'));

app.use('/graphql', graphql({
  schema,
  graphiql: true,
  rootValue: resolvers,
}));

const start = () => {
  cs.info(`Starting dnd5e api on port ${port}`);
  return app.listen(port);
};

export default {
  start,
};
