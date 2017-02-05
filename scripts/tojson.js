const fs = require('fs');
const path = require('path');

function main(args) {
	const type = args[0];
	const source = args[1];
	const sourcePath = path.join(__dirname, source);
	const data = fs.readFileSync(sourcePath, {encoding: 'utf8'});

	switch (type) {
		case 'line':
			const json = '[' + data.replace(/^\n/, '').replace(/\n$/, '').split('\n').join(',\n') + ']';
			fs.writeFile(sourcePath + '.' + type, json, 'utf8');
			break;
		default:
			throw new Error('Invalid argument ' + type);
	}
}

main(process.argv.splice(2));