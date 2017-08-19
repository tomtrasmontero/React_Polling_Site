const app = require('express').Router();
const User = require('./db.js').models.User;
const Polls = require('./db.js').models.Polls;

module.exports = app;

//  users route
app.get('/users', (req, res, next) => {
  const userData = User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return userData;
});

//  poll routes
app.get('/polls', (req, res, next) => {
  const pollData = Polls.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});
