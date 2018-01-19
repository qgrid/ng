/*eslint-disable  no-console, no-unused-vars, no-undef*/

const ENV = '' + ENV || 'production';

function info(source, message) {
	console.info(`qgrid.${source}: ${message}`);
}

export class Log {
	constructor() {
	}

	static warn(source, message) {
		console.warn(`qgrid.${source}: ${message}`);
	}

	static error(source, message) {
		console.error(`qgrid.${source}: ${message}`);
	}
}

/*eslint-enable*/

Log.info = ENV.indexOf('prod') >= 0 ? () => { } : info;