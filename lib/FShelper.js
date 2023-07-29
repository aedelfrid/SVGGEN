const fs = require('fs')

const writeToFile = (data) => {
    fs.writeFile(`./examples/generatedShapes/icon.svg`, data, (err) => {
        if (err) throw err
    })
};

module.exports = writeToFile