const args = require('../../utils/args.utils')
const info = (req,res) => {
  const data = {
    argumentos : args,
    sistema : process.platform,
    version : process.version,
    memoria: process.memoryUsage().rss,
    path : process.execPath,
    processId : process.pid,
    directorio : process.cwd(),
  }
  console.log(data)
  res.render('info', {data:data})
}

module.exports = info