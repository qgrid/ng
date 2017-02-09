// import EventListener from './event.listener'; - TODO:: use instead of document

export default function Shortcut(document) {
	let shortcuts = new Map(),
		dictionary = new Map();
	dictionary.set(9, 'tab');
	dictionary.set(13, 'enter');
	dictionary.set(37, 'left');
	dictionary.set(38, 'up');
	dictionary.set(39, 'right');
	dictionary.set(40, 'down');

	return function (id, commands) {
		for (let [, value] of commands) {
			if (value.shortcut) {
				value.shortcut
					.toLowerCase()
					.split('|')
					.forEach(shortcut => {
						shortcuts.set(shortcut, value);
					});
			}
		}
		document.bind('keydown', handler);
		return function off() {
			document.unbind('keydown', handler);
			shortcuts.delete(id);
		};

		function translate(e) {
			let codes = [];
			if (e.ctrlKey) {
				codes.push('ctrl');
			}

			if (e.shiftKey) {
				codes.push('shift');
			}

			let char = (dictionary.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();

			codes.push(char);
			return codes.join('+');
		}

		function handler(e) {
			const code = translate(e);
			if (shortcuts.has(code)) {
				let cmd = shortcuts.get(code);
				if (cmd.canExecute()) {
					e.preventDefault();
					cmd.execute();
				}
			}
		}
	};
}