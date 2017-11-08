
DialogController.$inject = ['$http', '$mdDialog'];
export default function DialogController($http, $mdDialog) {
	const ctrl = this;

	ctrl.rows = [];

	ctrl.cancel = function() {
		$mdDialog.cancel();
	};

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}