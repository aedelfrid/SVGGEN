
const questions = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Welcome to the SVGGEN, would you like to generate an icon?',
        default: true,
    },
    {   
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'textInput',
        message: 'Please select up to three characters to place in the center of your icon.',
        default: 'SVG',
        validate: (value) => {if(value && value.length <= 3) return true; else return 'Please provide an input, up to three letters.'}
    },
    {   
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'textColourInput',
        message: 'Please select the colour of your text.',
        default: 'white',
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {   
        when: (answers) => answers.start == true,
        type: 'list',
        name: 'shapeInput',
        message: 'Please select the shape of your icon.',
        choices: ['circle','triangle','square'],
        default: 'circle',
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
    {   
        when: (answers) => answers.start == true,
        type: 'input',
        name: 'shapeColourInput',
        message: 'Please select the colour of your icon.',
        default: 'green',
        validate: (value) => {if(value) return true; else return 'Please provide an input.'}
    },
];

module.exports = { questions }