const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// serve index file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.use('/api', require('./routes'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port:${port}`));

//  any other routes will send error 404
app.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

// seed data
db.seed();
