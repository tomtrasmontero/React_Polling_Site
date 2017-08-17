const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL);

const User = conn.define('user', {
  name: conn.Sequelize.STRING,
});

const sync = () => conn.sync({ force: true });

// seed function here
const seed = () => {
  const users = ['user1', 'user2', 'user3'];

  return sync()
    .then(() => {
      const seedUserData = users.map(name => User.create({ name }));
      return Promise.all(seedUserData);
    });
};

module.exports = {
  models: {
    User,
  },
  sync,
  seed,
};
