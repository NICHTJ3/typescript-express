import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to using typescript" });
});

export default app;
