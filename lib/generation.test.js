const {renderShape, renderSVG}  = require('./generation')

describe('Constructing SVG templates', () => {

    it('Selects a shape and apply inquirer answers to a class', () => {

        const answers = {

            shapeInput: `triangle`,
            shapeColourInput: `green`,
            textInput: `SVG`,
            textColourInput: `white`
        };

        const expectedShape = {
            specs: `<polygon points='0,100 50,0 100,100' fill='${answers.shapeColourInput}'/>`,
            text: `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='${answers.textColourInput}'>${answers.textInput}</text>`,
        };

        expect(renderShape(answers)).toEqual(expectedShape);
    });

    it('Places the shape code into an SVG container for export/stringification', () => {

        const expectedShape = {
            specs: `<polygon points='0,100 50,0 100,100' fill='green'/>`,
            text: `<text font-size='30px' text-anchor="middle" x='50' y='60' fill='white'>SVG</text>`,
        };

        let expectedSVG =
            `
        <svg viewBox='0 0 100px 100px' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            ${expectedShape.specs}
            ${expectedShape.text}
        </svg>
    `;

        expect(renderSVG(expectedShape)).toEqual(expectedSVG)
    });
});
