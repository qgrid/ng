const captureElement = require('../utils/capture').captureElement;
const FinallyPromise = require('../utils/promise');

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

		return FinallyPromise
			.all(tasks.map(task => this.screenshot(this.transform(task))))
			.finally(() => this.after(this.browser, this.webdriver));
	}

	screenshot(task) {
		this.browser.get(task.url);

		return new FinallyPromise((resolve, reject) =>
			this.browser.manage()
				.window()
				.maximize()
				.then(() => { console.log('maximized'); return this.browser.findElement(task.element(this.browser)); })
				.then(element => captureElement(this.browser, element, task.output(this.browser)))
				.then(() => resolve())
				.catch(e => reject(e)));
	}
}

module.exports = Screen;

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
