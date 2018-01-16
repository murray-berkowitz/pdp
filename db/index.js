const conn = require('./conn')

const sync = () => db.sync()
.catch(err => {
    console.log(err.message)
    db.close()
})

module.exports = {sync}