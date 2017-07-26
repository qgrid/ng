const fs = require('fs');
const webdriver = require('selenium-webdriver');
const Screen = require('./capture');
const pages = require('../../demo/pages/pages.json');

const browserFactory = require('./driver.factory');
const browser = browserFactory('chrome');

const tasks = pages
	.map(page => page.items)
	.reduce(function (memo, items) {
		return memo.concat(items.map(item => ({
			path: item.path,
			url: `https://qgrid.github.io/ng/#!/${item.path}`,
			element: 'page-details',
			output: `${item.path}.png`
		})));
	}, []);

new Screen(browser, webdriver, {
	beforeEach: browser => {
		return browser.sleep(5000);
	}
})
	.capture(tasks)
	.finally(e => {
		browser.quit();
	});
