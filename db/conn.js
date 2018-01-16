const Sequelize = require('sequelize')
const connection = process.env.DATABASE_URL || `postgres://localhost/lygerDB`
db = new Sequelize(connection, {logging: false, operatorsAliases: false })

db.authenticate()
.then((success) => {
    console.log('Connection has been established successfully.');
})
.catch((err) => {
    console.log('Unable to connect to the database:', err);
});

module.exports = db
