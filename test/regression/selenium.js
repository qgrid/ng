const fs = require('fs');
const webdriver = require('selenium-webdriver');
const by = webdriver.By;

const captureElement = require('../utils/capture').captureElement;
const browserFactory = require('./driver.factory');
const browser = browserFactory('chrome');

// capture(browser, 'https://qgrid.github.io/ng/#!/sorting-model', by.tagName('page-details'), 'output.png')
// 	.then(() => browser.quit())
// 	.catch(() => browser.quit());

function capture(browser, url, element, file) {
	return new Promise((resolve, reject) => {
		browser.get(url);

		browser.manage()
			.window()
			.maximize()
			.then(function () {
				browser.findElement(element).then(function (element) {
					captureElement(browser, element, file)
						.then(function () {
							resolve();
						})
						.catch(e => reject(e));
				});
			})
			.catch(e => reject(e));
	});
}

class Screen {
	constructor(browser, driver, hooks = {}) {
		this.before = isFunction(hooks.before) ? hooks.before : () => null;
		this.after = isFunction(hooks.after) ? hooks.after : () => null;

		this.beforeEach = isFunction(hooks.beforeEach) ? hooks.beforeEach : () => null;
		this.afterEach = isFunction(hooks.afterEach) ? hooks.afterEach : () => null;

		this.browser = browser;
		this.transform = transformTask(driver);
	}

	capture(tasks) {
		this.before(this.browser, this.webdriver);

		return Promise.all(tasks.map(task => {
			this.beforeEach(this.browser, this.webdriver);

			return this.screenshot(this.transform(task))
				.then(() => this.afterEach(this.browser, this.webdriver))
				.catch(() => this.afterEach(this.browser, this.webdriver));
		}))
			.then(() => this.after(this.browser, this.webdriver))
			.catch(() => this.after(this.browser, this.webdriver));
	}

	screenshot(task) {
		return new Promise((resolve, reject) => {
			const self = this;
			this.browser.get(task.url);

			browser.manage()
				.window()
				.maximize()
				.then(function () {
					browser.findElement(task.element(self.browser)).then(function (element) {
						captureElement(browser, element, task.output(self.browser))
							.then(function () {
								resolve();
							})
							.catch(e => reject(e));
					});
				})
				.catch(e => reject(e));
		});
	}
}

function transformTask(webDriver) {
	return function (task) {
		return {
			url: task.url,
			element: isFunction(task.element) ? task.element : () => {
				return webDriver.By.css(task.element);
			},
			output: isFunction(task.output) ? task.output : () => {
				return task.output;
			},
			before: task.before || (() => null),
			after: task.after || (() => null),
		}
	};
}

function isFunction(obj) {
	return typeof obj == 'function';
}

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
