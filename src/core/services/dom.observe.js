export function children(element) {
	return {
		on: handler => {
			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.removedNodes.length || mutation.addedNodes.length) {
						handler({
							removed: mutation.removedNodes,
							added: mutation.addedNodes
						});
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
	};
}

export function style(element) {
	return {
		on: handler => {
			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.attributeName) {
						handler({
							oldValue: mutation.oldValue,
							newValue: mutation.target.style
						});
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
	};
}

export function className(element) {
	return {
		on: handler => {
			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.attributeName) {
						handler({
							oldValue: mutation.oldValue,
							newValue: Array.from(mutation.target.classList).join(' ')
						});
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
	};
}
