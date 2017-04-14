const fs = require('fs');
const webdriver = require('selenium-webdriver');
const Screen = require('./capture');

const browserFactory = require('./driver.factory');
const browser = browserFactory('chrome');

new Screen(browser, webdriver, {
	beforeEach: function (browser) {
		console.log('SLEEP');
		browser.sleep(5000);
		console.log('WAKE');
	}
}).capture([{
	url: 'https://qgrid.github.io/ng/#!/sorting-model',
	element: 'page-details',
	output: 'sorting-model.png'
}, {
	url: 'https://qgrid.github.io/ng/#!/custom-filter',
	element: 'page-details',
	output: 'custom-filter.png'
}])
	.then(() => browser.quit())
	.catch(e => {
		console.log(e);
		browser.quit();
	});
