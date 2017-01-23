export default function (pages) {
	const routes = pages.reduce((memo, p) => {
		// TODO: use es6 imports
		const path = `pages/${p.path}/index`;
		memo[p.path] = {
			controller: require(`./${path}.js`).default,
			templateUrl: `${path}.html`
		};
		return memo;
	}, {});

	Setup.$inject = ['$routeProvider', '$locationProvider'];
	function Setup($routeProvider, $locationProvider) {
		pages.forEach(page => {
			const route = routes[page.path];
			$routeProvider
				.when('/' + page.path, {
					templateUrl: route.templateUrl,
					controller: route.controller,
					controllerAs: '$ctrl',
					reloadOnSearch: false
				});
		});

		$routeProvider
			.when('/', {
				templateUrl: 'pages/home/index.html',
				controllers: routes.home.controller,
				controllerAs: '$ctrl',
				reloadOnSearch: false
			})
			.otherwise({
				redirectTo: '/'
			});


		// TODO: setup history api for the webpack-dev-server
		$locationProvider
			.html5Mode(false)
			.hashPrefix('!');
	}

	return Setup;
}