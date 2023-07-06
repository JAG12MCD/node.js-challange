const licenses = [
	'Apache',
	'GNU',
	'MIT',
	'ISC',
	'Mozilla',
	'Boost Software',
	'Unlicense',
];

const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Enter a project title: ',
	},
	{
		type: 'editor',
		name: 'description',
		message: `Enter a project description :
        (You may include following things:-
        What was your motivation?
        Why did you build this project?
        What problem does it solve?
        What did you learn?)`,
	},
	{
		type: 'editor',
		name: 'installationInstructions',
		message: `Enter project installation instructions`,
	},
	{
		type: 'editor',
		name: 'usage',
		message: `Enter project usage information`,
	},
	{
		type: 'editor',
		name: 'credits',
		message: `Enter collaborators, with link to their Github profiles.
        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
        If you followed tutorials, include links to those here as well.`,
	},
	{
		type: 'list',
		name: 'license',
		message: `Choose Correct license: `,
		choices: licenses,
	},
	{
		type: 'input',
		name: 'username',
		message: 'Enter Github user name: ',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email : ',
	},
];

module.exports = { questions, licenses };
