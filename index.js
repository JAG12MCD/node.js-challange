// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const data = require('./data');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

function showQuestion(questions) {
	return new Promise((resolve, reject) => {
		inquirer
			.prompt(questions)
			.then((answers) => {
				console.log('answer', answers);
				return resolve(answers);
			})
			.catch((error) => {
				console.log('error', error);
				return reject(error);
			});
	});
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	try {
		fs.writeFileSync(`./output/${fileName}`, data, 'utf8');
	} catch (error) {
        return new Error(error);
    }
}

// TODO: Create a function to initialize app
async function init() {
	try {
		const answers = await showQuestion(data.questions);
		// const answers = {
		// 	title: 'A',
		// 	description: 'Descrpition Secion\n',
		// 	installationInstructions: 'installation instructions\n\nTest',
		// 	usage: 'Usage 1\nUsage 2\n\n',
		// 	credits: '',
		// 	license: 'MIT',
		// 	username: 'pniravc36',
		// 	email: 'pniravc36@gmail.com',
		// };
        writeToFile("readme.md", generateMarkdown(answers))
	} catch (error) {
		console.log('There is some error', error);
	}
}

// Function call to initialize app
init();
