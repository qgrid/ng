RowOptionsEdit.$inject = ['$scope', '$timeout'];
export default function RowOptionsEdit($scope, $timeout) {
	this.openMenu = ($mdMenu, e) => $mdMenu.open(e);
	$scope.$on('$mdMenuClose', () => $timeout($scope.$view.edit.cell.cancel.execute, 100));
}