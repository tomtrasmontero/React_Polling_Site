const app = require('express').Router();

module.exports = app;

app.get('/', (req, res) => {
  res.send('test this route');
});
