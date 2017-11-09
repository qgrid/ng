const semver = require('semver');
const levels = ['major', 'minor', 'patch'];

module.exports = function getNewVersion(current, release) {
	if (semver.valid(release)) {
		if (semver.gt(release, current)) {
			return release;
		}
		throw new Error(`New version ${release} is less than old one: ${current}`);
	}
	if (levels.includes(release)) {
		return semver.inc(current, release);
	}
	return semver.inc(current, 'patch');
};
