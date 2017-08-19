const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
});

const Poll = conn.define('poll', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
  },
  option: {
    type: conn.Sequelize.ARRAY(conn.Sequelize.STRING),
    allowNull: false,
  },

});

// define relationship
Poll.belongsTo(User);
User.hasMany(Poll);

const sync = () => conn.sync({ force: true });

// seed function here
const seed = () => {
  const users = [
    { name: 'user1', password: 'password1', email: 'email1@example.com' },
    { name: 'user2', password: 'password2', email: 'emai2l@example.com' },
  ];

  const polls = [
    { name: 'poll1', pollOption: ['option1', 'option2'], userId: 1 },
    { name: 'poll2', pollOption: ['option1', 'option2'], userId: 2 },
  ];

  return sync()
    .then(() => {
      const seedUserData = users.map(user => User.create({
        name: user.name,
        password: user.password,
        email: user.email,
      }));

      return Promise.all(seedUserData)
        .then(() => {
          const seedPollData = polls.map(poll => Poll.create({
            name: poll.name,
            option: poll.pollOption,
            userId: poll.userId,
          }));
          return Promise.all(seedPollData);
        });
    });
};


module.exports = {
  models: {
    User,
    Poll,
  },
  sync,
  seed,
};
