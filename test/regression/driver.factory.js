const webdriver = require('selenium-webdriver');
require('chromedriver');

module.exports = function (browser) {
	var capabilities = null;

	switch (browser) {
		case 'chrome': {
			capabilities = webdriver.Capabilities.chrome();
			break;
		}
		case 'ie': {
			capabilities = webdriver.Capabilities.chrome();
			break;
		}
	}

	return new webdriver.Builder()
		.withCapabilities(capabilities)
		.build();
};