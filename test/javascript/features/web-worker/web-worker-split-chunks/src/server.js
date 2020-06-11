import path from 'path';
import ejs from 'ejs';
import express from 'express';

const app = express();

app.get('/web-worker-bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'statics/worker.bundle.js'));
});

app.get('/combined.chunk.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'statics/combined.chunk.js'));
});

app.get('/web-worker.js', async (req, res) => {
  res.sendFile(path.join(__dirname, '../src/web-worker-wrapper.js'));
});

app.get('/', async (req, res) => {
  res.send(await ejs.renderFile('./src/index.ejs'));
});

app.listen(process.env.PORT);
