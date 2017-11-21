import {Shortcut} from '@grid/core/shortcut/shortcut';

ArrayEdit.$inject = [];

export default function ArrayEdit() {
	this.text = '';

	this.keydown = e => {
		const code = Shortcut.translate(e);
		if (code === 'enter') {
			if (this.text && this.text.length) {
				e.stopPropagation();
			}
		}
	};
}