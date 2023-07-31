const inquirer = require('inquirer')

const  { questions } = require('./lib/questions')

const { renderShape, renderSVG } = require('./lib/generation')

const { writeToFile, path } = require('./lib/FShelper')

const askQuestion = async (questions) => {
    inquirer.prompt(questions)
        .then((answers) => {

            if (answers.start === true) {
                async () => {
                    console.log(answers)

                    const shape = renderShape(answers);

                    const SVG = renderSVG(shape)
                    
                    await writeToFile(path, SVG.toString())
                    console.log('Generated logo.svg')
                }
            } else {
                console.log('SVG GEN Aborted.')
            }
        })
};

askQuestion(questions);