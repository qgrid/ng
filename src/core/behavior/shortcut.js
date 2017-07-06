import {ShortcutManager} from './shortcut.manager';

const shortcutManager = new ShortcutManager();
const codeMap = new Map()
	.set(8, 'backspace')
	.set(9, 'tab')
	.set(13, 'enter')
	.set(16, 'shift')
	.set(17, 'ctrl')
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
	.set(112, 'f1')
	.set(113, 'f2')
	.set(114, 'f3')
	.set(115, 'f4')
	.set(116, 'f5')
	.set(117, 'f6')
	.set(118, 'f7')
	.set(119, 'f8')
	.set(120, 'f9')
	.set(121, 'f10')
	.set(122, 'f11')
	.set(123, 'f12');


export class Shortcut {
	constructor(manager) {
		this.manager = manager;
	}

	get keyCode() {
		return Shortcut.keyCode;
	}

	setKeyCode(code) {
		Shortcut.keyCode = code;
	}

	isControl(code) {
		const codes = code.split('+');
		return Array.from(codeMap.values()).some(val => codes.some(code => val === code));
	}

	static translate(e) {
		const codes = [];
		const char = (codeMap.get(e.keyCode) || String.fromCharCode(e.keyCode)).toLowerCase();
		if (e.ctrlKey && e.keyCode !== 17) {
			codes.push('ctrl');
		}

		if (e.shiftKey && e.keyCode !== 16) {
			codes.push('shift');
		}
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
