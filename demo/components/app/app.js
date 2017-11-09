Controller.$inject = [
	'$scope',
	'Demo.PAGES',
	'Demo.THEMES',
	'Demo.DEFAULTS',
	'qgridTheme',
	'$mdSidenav',
	'$location',
	'$window'
];

export default function Controller($scope, pages, themes, defaults, themeProvider, $mdSidenav, $location, $window) {
	$scope.$app = this;

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
		$location.path(`/${page.path}`);
	};

	this.onThemeChanged = theme => {
		themeProvider.name = this.theme = theme;
		$location.search('theme', theme);
		$window.location.reload();
	};

	$scope.$on('$locationChangeStart', () => {
		const entries = flatten(this.pages);
		const path = ($location.path() || defaults.path).toLowerCase().substring(1);
		const page = entries.filter(p => p.path.toLowerCase() === path)[0] || entries[0];
		if (page) {
			this.page = page;
		}
	});
}

function flatten(pages, result = []) {
	pages
		.forEach(page => {
			if (page.path) {
				result.push(page);
			}

			if (page.items) {
				flatten(page.items, result);
			}
		});

	return result;
}