const server = require('./app')
const port = process.env.PORT || 2020
const chalk = require('chalk')

server.listen(port, () => console.log(chalk.magenta(`listening on port ${port}`)))