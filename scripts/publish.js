'use strict';

function main() {
	const path = require('path');
	const ghpages = require('gh-pages');
	const dir = path.resolve(path.join(__dirname, '..', 'demo'));

	ghpages.publish(dir, {
		//branch: 'gh-pages-test',
		user: {
			name: 'Dmitry Sitnov',
			email: 'dimitry.sitnov@gmail.com'
		},
		message: '(deploy): CI',
		logger: function (message) {
			console.log('gh-pages: ', message);
		}
	});
}

main();