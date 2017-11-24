import {Log} from '@grid/core/infrastructure';

export default function (pages) {
	const routes = buildRoutes(pages);

	Setup.$inject = ['$routeProvider', '$locationProvider', '$compileProvider'];
	function Setup($routeProvider, $locationProvider, $compileProvider) {
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
				templateUrl: 'pages/blank.html',
				reloadOnSearch: false
			})
			.otherwise({
				redirectTo: '/'
			});


		// TODO: setup history api for the webpack-dev-server
		$locationProvider
			.html5Mode(false)
			.hashPrefix('!');

		// Comment this if you want to have support of tools such as batarang
		$compileProvider.debugInfoEnabled(false);
		if ($compileProvider.commentDirectivesEnabled) { // 1.5.8 doesn't support this
			$compileProvider.cssClassDirectivesEnabled(false);
			$compileProvider.commentDirectivesEnabled(false);
		}
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
					path: node.path,
					controller: node.code.js ? require(`./${path}.js`).default : null,
					templateUrl: node.code.html ? `${path}.html` : 'pages/blank.html'
				};
			}
			catch (ex) {
				Log.warn('setup', `Can't find "pages/${node.path}/index.js"`);
			}
		}

		if (node.items) {
			buildRoutes(node.items, routes);
		}

		return memo;
	}, routes);
}