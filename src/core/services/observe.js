export function children(element, handler) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.removedNodes.length || mutation.addedNodes.length) {
				handler();
			}
		});
	});
	const config = {
		childList: true,
		subtree: true
	};
	observer.observe(element, config);

	return observer.disconnect;
}

export function style(element, handler) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName) {
				handler(mutation.oldValue, mutation.target.style);
			}
		});
	});
	const config = {
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['style']
	};
	observer.observe(element, config);

	return observer.disconnect;
}

export function className(element, handler) {
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.attributeName) {
				const newValue = Array.from(mutation.target.classList).join(' ');
				handler(mutation.oldValue, newValue);
			}
		});
	});
	const config = {
		attributes: true,
		attributeOldValue: true,
		attributeFilter: ['class']
	};
	observer.observe(element, config);

	return observer.disconnect;
}
