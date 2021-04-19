const fs = require('fs')
const path = require('path')

function forEachRequire(dir) {
    const files = fs.readdirSync(path.resolve(__dirname, dir), 'utf-8');
    const result = {}

    files.forEach(file => {
        const data = require('./v1/' + file)
        result[file] = data
    })

    return result
}

exports.v1 = forEachRequire('./v1')