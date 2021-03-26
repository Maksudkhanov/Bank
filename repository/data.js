const fs = require('fs')

const data = fs.readFileSync('repository/info.json')

const dataParse = JSON.parse(data)

module.exports = dataParse


