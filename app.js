// npm init to create package.json manually
//npm init -y to create package.json with all default setting without having to skip like manually

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)
