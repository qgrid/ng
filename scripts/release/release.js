const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const commandLineArgs = require('command-line-args');
const options = commandLineArgs([
	{
		name: 'base-branch',
		alias: 'b',
		type: String,
		defaultValue: 'master'
	},
	{
		name: 'release-branch',
		alias: 'r',
		type: String,
		defaultValue: '1.0.x'
	},
	{
		name: 'version',
		alias: 'v',
		type: String,
		defaultValue: ''
	}
]);
const getNextVersion = require('./version');

const cwd = path.resolve('.');
const pkgPath = path.join(cwd, 'package.json');
const bowerPath = path.join(cwd, 'bower.json');

main(options['base-branch'], options['release-branch']);

function main(baseBranch, releaseBranch) {
	shell.exec(`git stash`);
	shell.exec(`git checkout ${releaseBranch}`);
	shell.exec(`git pull origin ${releaseBranch}`);
	shell.exec(`git pull origin ${baseBranch}`);

	const pkg = require(pkgPath);
	const bower = require(bowerPath);
	const version = getNextVersion(pkg.version, options['version']);

	pkg.version = version;
	bower.version = version;
	fs.writeFileSync(bowerPath, JSON.stringify(bower, null, 2));
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

	const tag = `v${version}`;

	shell.exec(`npm run build:prod`);
	shell.exec(`npm run build:prod:min`);

	shell.exec(`git add ${path.join(cwd, 'dist')}`);
	shell.exec(`git add ${pkgPath}`);
	shell.exec(`git add ${bowerPath}`);
	shell.exec(`git commit -m "Release ${tag}"`);
	shell.exec(`git tag ${tag}`);

	shell.exec(`git push`);
	shell.exec(`git push origin ${tag}`);

	shell.exec(`npm publish`);

	shell.exec('git checkout master');
}
