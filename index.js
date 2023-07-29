const inquirer = require('inquirer')

const  { questions } = require('./lib/questions')

const { renderShape, renderSVG, writeToFile } = require('./lib/generation')

const askQuestion = async (questions) => {
    inquirer.prompt(questions)
        .then((answers) => {

            if (answers.start === true) {
                console.log(answers)

                const shape = renderShape(answers);

                const SVG = renderSVG(shape)
                
                writeToFile(SVG.toString())
                console.log('Generated logo.svg')
            } else {
                console.log('SVG GEN Aborted.')
            }
        })
};

askQuestion(questions);