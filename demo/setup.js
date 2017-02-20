export default function (pages) {
	const routes = buildRoutes(pages);

	Setup.$inject = ['$routeProvider', '$locationProvider'];
	function Setup($routeProvider, $locationProvider) {
		Object.keys(routes)
			.forEach(key => {
				const route = routes[key];
				$routeProvider
					.when('/' + route.path, {
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

function buildRoutes(nodes, routes = {}) {
	return nodes.reduce((memo, node) => {
		// TODO: use es6 imports
		if (node.path) {
			const path = `pages/${node.path}/index`;
			try {
				memo[node.path] = {
					path: path,
					controller: require(`./${path}.js`).default,
					templateUrl: `${path}.html`
				};
			}
			catch (ex) {
			}
		}

		if (node.items) {
			buildRoutes(node.items, routes);
		}

		return memo;
	}, routes);
}