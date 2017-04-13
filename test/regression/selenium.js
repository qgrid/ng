require('chromedriver');
const fs = require('fs');
const captureElement = require('../utils/capture').captureElement;
const phantomjs_exe = require('phantomjs-prebuilt').path;

var webdriver = require('selenium-webdriver'),
	by = webdriver.By,
	until = webdriver.until;

var customPhantom = webdriver.Capabilities.chrome();
// customPhantom.set("phantomjs.binary.path", phantomjs_exe);
// customPhantom.set("webdriver.ie.driver", `C:\Users\valentin.korolev\Downloads\IEDriverServer_x64_3.3.0\IEDriverServer.exe`);

var driver = new webdriver.Builder()
	.withCapabilities(customPhantom)
	.build();

driver.get('http://www.google.com');

driver.manage().window().setSize(1280, 1024).then(function () {
	driver.findElement(by.name('q')).sendKeys('w');
	driver.findElement(by.name('btnG')).click();

	driver.wait(until.titleMatches(/^w/), 5000);

	driver.findElement(by.css('.tsf')).then(function (input) {
		captureElement(driver, input, 'output.png').then(function () {
			driver.quit();
		});
	});
});
