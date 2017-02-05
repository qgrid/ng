Controller.$inject = [
	'Demo.PAGES',
	'Demo.THEMES',
	'Demo.DEFAULTS',
	'qgridTheme',
	'$mdSidenav',
	'$location',
	'$window'
];

export default function Controller(pages, themes, defaults, themeProvider, $mdSidenav, $location, $window) {
	this.pages = pages;
	this.page = null;
	this.themes = themes;
	themeProvider.name =
		this.theme =
			$location.search().theme ||
			defaults.theme;

	this.toggleMenu = () => {
		$mdSidenav('left').toggle();
	};

	this.onPageChanged = page => {
		this.page = page;
	};

	this.onThemeChanged = theme => {
		themeProvider.name = this.theme = theme;
		$location.search('theme', theme);
		$window.location.reload();
	};

	const path = ($location.path() || defaults.path).toLowerCase().substring(1);
	const page = this.pages.filter(p => p.path.toLowerCase() === path)[0] || this.pages[0];
	if (page) {
		this.page = page;
	}
}