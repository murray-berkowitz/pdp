const server = require('./app')
const chalk = require('chalk')
const db = require('./db')

const port = process.env.PORT || 2020

db.sync({force: true})
.then(() => {
    server.listen(port, () => console.log(chalk.magenta(`listening on port ${port}`)))
})
