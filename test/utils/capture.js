const png = require('png-crop');

module.exports = {
	captureElement: captureElement
};

function captureElement(driver, element, file) {
	return new Promise((resolve, reject) => {
		driver.takeScreenshot().then(function (image, err) {
			Promise.all([
				element.getSize(),
				element.getLocation()
			]).then(function (result) {
				const [size, location] = result;
				const config = {
					width: size.width,
					height: size.height,
					top: location.y,
					left: location.x
				};

				png.crop(Buffer.from(image, 'base64'), file, config, function (err) {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			}).catch(function (e) {
				console.log(`EXCEPTION OCCURED: ${e}`);
				reject(err);
			});
		});
	});
}