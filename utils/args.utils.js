const minimist = require('minimist')
const PORT = { default: { port: 8080 }, alias : { p: 'port'}}
const args = minimist(process.argv.splice(2), PORT)

module.exports = args