import {ShortcutManager} from './shortcut.manager';

const shortcutManager = new ShortcutManager();
const codeMap = new Map()
	.set(8, 'backspace')
	.set(9, 'tab')
	.set(13, 'enter')
	.set(27, 'escape')
	.set(32, 'space')
	.set(33, 'pageUp')
	.set(34, 'pageDown')
	.set(35, 'end')
	.set(36, 'home')
	.set(37, 'left')
	.set(38, 'up')
	.set(39, 'right')
	.set(40, 'down')
	.set(113, 'f2')
	.set(118, 'f7');


export class Shortcut {
	constructor(manager) {
		this.manager = manager;
	}

	get codeMap() {
		return codeMap;
	}

	get keyCode() {
		return Shortcut.keyCode || '';
	}

	static translate(e) {
		const codes = [];
		if (e.ctrlKey) {
			codes.push('ctrl');
		}

		if (e.shiftKey) {
			codes.push('shift');
		}

		const char = (codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
		codes.push(char);
		return codes.join('+');
	}

	static keyDown(e) {
		const code = Shortcut.translate(e);
		if (shortcutManager.execute(code)) {
			e.preventDefault();
			Shortcut.keyCode = code;
			return true;
		}

		return false;
	}

	register(commands) {
		return shortcutManager.register(this.manager, commands);
	}
}
