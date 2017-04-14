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

		return FinallyPromise.all(tasks.map(task => {
			this.beforeEach(this.browser, this.webdriver);

			return this.screenshot(this.transform(task))
				.finally(() => this.afterEach(this.browser, this.webdriver));
		})).finally(() => this.after(this.browser, this.webdriver));
	}

	screenshot(task) {
		return new FinallyPromise((resolve, reject) => {
			const self = this;
			this.browser.get(task.url);

			this.browser.manage()
				.window()
				.maximize()
				.then(function () {
					self.browser.findElement(task.element(self.browser)).then(function (element) {
						captureElement(self.browser, element, task.output(self.browser))
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
