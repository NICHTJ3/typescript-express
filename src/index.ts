import app from './app';

const port = 8888;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
