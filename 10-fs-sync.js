const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//{flag: 'a'} is to append if it is removed it will overwrite only
writeFileSync(
  './content/result-sync.txt',
  `Here is the Result: ${first},${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting next one')
