import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Welcome to using typescript' });
});

export default app;
