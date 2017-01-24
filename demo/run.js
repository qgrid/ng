export default function Run($rootScope, $location) {
	let search = {};

	const locationChangedOff =
		$rootScope.$on('$locationChangeSuccess', () => {
			const state = $location.search();
			if (Object.keys(state).length) {
				search = state;
			}
		});

	const routChangeOff =
		$rootScope.$on('$routeChangeSuccess', () => $location.search(search));

	$rootScope.$on('$destroy', () => {
		locationChangedOff();
		routChangeOff();
	});
}

Run.$inject = ['$rootScope', '$location'];