const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "health_app_db",
  process.env.DB_ROOT_USER,
  process.env.DB_ROOT_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
};

module.exports = {
  connect,
  sequelize,
};
