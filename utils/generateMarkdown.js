// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	if (license) {
		return `https://img.shields.io/badge/license-${license}-blue.svg`;
	} else return '';
}

function getGithubLink(username) {
	if (username) return `https://github.com/${username}`;
	else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license != 'Unlicense') {
		return `## License 
![badmath](${renderLicenseBadge(license)})\n`;
	} else return '';
}

function renderTitleSection(title) {
	if (title) return `# ${title}\n`;
	else return '';
}

function renderDescriptionSection(description) {
	if (description)
		return `## Description 
${description}\n`;
	else return '';
}

function renderTableOfContent(data) {
	let res = ``;
	let isSectionEmpty = true;

	if (data.installationInstructions) {
		isSectionEmpty = false;
		res += `- [Installation](#installation)\n`;
	}

	if (data.usage) {
		isSectionEmpty = false;
		res += `- [Usage](#usage)\n`;
	}

	if (data.credits) {
		isSectionEmpty = false;
		res += `- [Credits](#credits)\n`;
	}

	if (data.license != 'Unlicense') {
		isSectionEmpty = false;
		res += `- [License](#license)\n`;
	}

	if (data.username || data.email) {
		isSectionEmpty = false;
		res += `- [Questions](#questions)\n`;
	}

	if (!isSectionEmpty) {
		res = `## Table of Contents\n` + res;
	}

	return res;
}

function renderQuestionSection(email, username) {
	let res = '';
	if (username || email) {
		res += `## Questions
Got any questions?\n`;
	}
	if (username) {
		res += `[Github Profile](${getGithubLink(username)})\n`;
	}
	if (email) {
		res += `[Contact Here](mailto:${email})\n`;
	}

	return res;
}

function renderInstallationInstructionsSection(installationInstructions) {
	if (installationInstructions) {
		return `## Installation
${installationInstructions}\n`;
	} else return '';
}

function renderUsageSection(usage) {
	if (usage) {
		return `## Usage
${usage}\n`;
	} else return '';
}

function renderCreditsSection(credits) {
	if (credits) {
		return `## Credits
${credits}\n`;
	} else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
${renderTitleSection(data.title)}
${renderDescriptionSection(data.description)}
${renderTableOfContent(data)}
${renderInstallationInstructionsSection(data.installationInstructions)}
${renderUsageSection(data.usage)}
${renderCreditsSection(data.credits)}
${renderLicenseSection(data.license)}
${renderQuestionSection(data.email, data.username)}
`;
}

module.exports = generateMarkdown;
