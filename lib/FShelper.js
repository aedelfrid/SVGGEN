const fs = require('fs')

const path = `./examples/generatedShapes/icon.svg`

const writeToFile = async (path, data) => {
    fs.writeFile(`${path}`, data, (err) => {
        if (err) throw err
    })
};

module.exports = { writeToFile, path}