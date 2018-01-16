const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    login: Sequelize.STRING,
    homeFloor: Sequelize.TINYINT,
    avatarUrl: Sequelize.STRING
  });

  const Room = sequelize.define('Room', {
    title: Sequelize.STRING,
    capacity: Sequelize.SMALLINT,
    floor: Sequelize.TINYINT
  });

  const Event = sequelize.define('Event', {
    title: Sequelize.STRING,
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE
  });    

  Event.User = Event.belongsToMany(User, { through: 'EventsUsers' });
  User.Event = User.belongsToMany(Event, { through: 'EventsUsers' });
  Event.Room = Event.belongsTo(Room);

  return {
    Room, Event, User
  };
};
