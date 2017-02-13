import EventListener from './event.listener';

export default class Shortcut {
	constructor(document, apply) {
		this.apply = apply;
		this.shortcuts = new Map();
		this.codeMap = new Map()
			.set(9, 'tab')
			.set(13, 'enter')
			.set(37, 'left')
			.set(38, 'up')
			.set(39, 'right')
			.set(40, 'down')
			.set(113, 'f2')
			.set(27, 'escape');

		this.listener =
			new EventListener(this, document)
				.on('keydown', this.onKeyDown);
	}

	onKeyDown(e) {
		const code = this.translate(e);
		if (this.shortcuts.has(code)) {
			const cmd = this.shortcuts.get(code);
			if (cmd.canExecute()) {
				e.preventDefault();
				this.apply(() => cmd.execute());
			}
		}
	}

	translate(e) {
		let codes = [];
		if (e.ctrlKey) {
			codes.push('ctrl');
		}

		if (e.shiftKey) {
			codes.push('shift');
		}

		const char = (this.codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
		codes.push(char);
		return codes.join('+');
	}

	register(id, commands) {
		for (let [, value] of commands) {
			if (value.shortcut) {
				value.shortcut
					.toLowerCase()
					.split('|')
					.forEach(shortcut =>
						this.shortcuts.set(shortcut, value));
			}
		}

		return () => {
			this.listener.off();
			this.shortcuts.delete(id);
		};
	}
}