import app from "./app";

const port: Number = 8888;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
