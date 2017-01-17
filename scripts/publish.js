'use strict';


// var exec = require('child_process').exec;
// var cmd = 'npm run build:prod';
//
// exec(cmd, function(error, stdout, stderr) {
// 	console.log(stdout);
// });
//
// const spawn = require('child_process').spawnSync;
// const buildProd = spawn('npm run build:prod');
//
// console.log(`stderr: ${JSON.stringify(buildProd)}`);
// console.log(`stdout: ${buildProd}`);

const path = require('path');
const ghpages = require('gh-pages');
const dir = path.resolve(path.join(__dirname, '..', 'demo'));

ghpages.publish(dir, {
	branch: 'gh-pages-test',
	// src: [
	// 	'dist/**',
	// 	'demo/**'
	// ],
	user: {
		name: 'Dmitry Sitnov',
		email: 'dimitry.sitnov@gmail.com'
	},
	message: '(deploy): CI',
	logger: function(message) {
		console.log('gh-pages: ', message);
	}
});