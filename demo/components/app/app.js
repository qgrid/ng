'use strict';

Controller.$inject = [
	'Demo.PAGES',
	'Demo.THEMES',
	'Demo.DEFAULTS',
	'$mdSidenav',
	'$location'
];

export default function Controller(pages, themes, defaults, $mdSidenav, $location) {
	this.pages = pages;
	this.page = null;
	this.themes = themes;
	this.theme = defaults.theme;

	this.toggleMenu = () => {
		$mdSidenav('left').toggle();
	};

	this.onPageChanged = page => {
		this.page = page;
	};

	this.onThemeChanged = theme => {
		this.theme = theme;
	};

	const path = ($location.path() || defaults.path).toLowerCase().substring(1);
	const page = this.pages.filter(p => p.path.toLowerCase() === path)[0] || this.pages[0];
	if (page) {
		this.page = page;
	}
}