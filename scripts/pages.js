const fs = require('fs');
const path = require('path');

function dirnames(sourcePath) {
	console.log(`pages: reading ${sourcePath}`);
	return fs
		.readdirSync(sourcePath)
		.filter(file => fs.statSync(path.join(sourcePath, file)).isDirectory());
}

function main(args) {
	const sourcePath = args[0];
	const destPath = path.join(sourcePath, 'pages.auto.json');
	const names = dirnames(sourcePath);
	const pages = names.map(page => {
		console.log(`pages: ${page}`);
		return {
			path: page,
			title: page[0].toUpperCase() + page.substring(1)
		};
	});

	console.log(`pages: writing ${destPath}`);
	fs.writeFile(
		destPath,
		JSON.stringify(pages, null, 3),
		'utf8');
}

main(process.argv.splice(2));