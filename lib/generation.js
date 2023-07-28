const fs = require('fs')

const { circle, triangle, square } = require('./shapes.js')

const renderShape = (answers) => {
    const { shapeInput, shapeColourInput, textInput, textColourInput } = answers;

    if (shapeInput === 'circle') {
        const shape = new circle(shapeColourInput, textInput, textColourInput)
        return shape
    } else if (shapeInput === 'triangle') {
        const shape = new triangle(shapeColourInput, textInput, textColourInput)
        return shape
    } else if (shapeInput === 'square') {
        const shape = new square(shapeColourInput, textInput, textColourInput)
        return shape
    };
};

const renderSVG = (answers) => {

    let shape = renderShape(answers);

    let SVG =
        `
        <svg viewBox='0 0 100px 100px' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            ${shape.specs}
            ${shape.text}
        </svg>
    `;

    return SVG
};

const writeToFile = (data) => {
    fs.appendFile(`./examples/generatedShapes/icon.svg`, data, (err) => {
        if (err) throw err
    })
};

module.exports = {renderSVG, writeToFile}