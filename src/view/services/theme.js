import {Event} from '@grid/core/infrastructure';

const DefaultTheme = 'default';

export default class ThemeProvider {
	constructor() {
		this.themes = new Map();
		this.$get.$inject = ['$templateCache'];
	}

	register(theme, apply) {
		if (this.themes.has(theme)) {
			const prevApply = this.themes.get(theme);
			this.themes.set(theme, function () {
				prevApply(...arguments);
				apply(...arguments);
			});
		}
		else {
			this.themes.set(theme, apply);
		}
	}

	$get($templateCache) {
		return new Theme(this.themes, $templateCache);
	}
}

class Theme {
	constructor(themes, cache) {
		this._name = '';
		this.changed = new Event();
		this.themes = themes;
		this.cache = cache;

		this.name = DefaultTheme;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (value !== this._name) {
			const oldValue = this._name;
			const apply = this.themes.get(value);

			if (this._name !== DefaultTheme && value !== DefaultTheme) {
				this.themes.get(DefaultTheme)(this.cache);
			}

			this._name = value;

			apply(this.cache);

			this.changed.emit({
				newValue: value,
				oldValue: oldValue
			});
		}
	}
}