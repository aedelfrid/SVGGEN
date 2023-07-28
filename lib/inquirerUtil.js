const { default: inquirer } = require("inquirer");

const { renderSVG } = require('./generation')

const questions = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Welcome to the SVGGEN, would you like to generate an logo?',
        default: true,
    },
    {   
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'textInput',
        message: 'Please select up to three characters to place in the center of your logo.',
        default: 'SVG',
        validate: (value) => {if(value && value.length <= 2) return true; else return 'Please provide an input, up to three letters.'}
    },
    {   
        when: (answers) => answers.start == true,
        type: 'list',
        name: 'shapeInput',
        message: 'Please select the shape of your logo.',
        choices: ['circle','triangle','square'],
        default: 'circle',
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {   
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'textInput',
        message: 'Please select the colour of your logo.',
        default: 'green',
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
];

const askQuestion = async () => {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const SVG = renderSVG(answers)
            
            writeToFile(SVG.toString())
        })
};

module.exports = { questions, askQuestion }