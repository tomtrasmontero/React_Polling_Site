const app = require('express').Router();
const User = require('./db.js').models.User;
const Polls = require('./db.js').models.Poll;

module.exports = app;

//  ################### users route ###################
//  get all user data
app.get('/users', (req, res, next) => {
  const userData = User.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return userData;
});

// get specific user data
app.get('/users/:id', (req, res, next) => {
  const userData = User.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return userData;
});

// get all user data & polls by specified user
app.get('/users/:id/polls', (req, res, next) => {
  const userData = User.findAll({
    include: [{ model: Polls, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return userData;
});

//  ################### polls route ###################
//  get all polls
app.get('/polls', (req, res, next) => {
  const pollData = Polls.findAll()
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});

// get specific poll data
app.get('/polls/:id', (req, res, next) => {
  const pollData = Polls.findAll({ where: { id: req.params.id } })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});

// get specific poll by specific user
app.get('/polls/user/:id', (req, res, next) => {
  const pollData = Polls.findAll({ where: { userId: req.params.id } })
    .then((result) => {
      res.send(result);
    })
    .catch(next);

  return pollData;
});
