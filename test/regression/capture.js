const fs = require('fs');
const webdriver = require('selenium-webdriver');
const Screen = require('./screen');
const pages = require('../../demo/pages/pages.json');

const browserFactory = require('./driver.factory');
const browser = browserFactory('chrome');

const tasks = pages
	.map(page => page.items)
	.reduce((memo, items) =>
			memo.concat(items
				.filter(task => fs.existsSync(`demo/pages/${task.path}`))
				.map(item => ({
					path: item.path,
					url: `https://qgrid.github.io/ng/#!/${item.path}`,
					element: 'page-details',
					output: `${item.path}.png`
				}))),
		[]);

new Screen(
	browser,
	webdriver, {
		beforeEach: browser => browser.sleep(5000)
	})
	.capture(tasks)
	.finally(e => browser.quit());
