export default Controller;

Controller.$inject = ['$scope'];
function Controller($scope) {
	$scope.row = [{firstName: 'Alex'}, {firstName: 'Pavel'}];
	$scope.columns = [
		{key: 'firstName', label: 'First Name'},
		{key: 'lastName', label: 'Last Name'},
		{key: 'birthDate', label: 'Date of Birth'},
		{key: 'location', label: 'Location'},
		{key: 'zipCode', label: 'Zip'}
	];
}