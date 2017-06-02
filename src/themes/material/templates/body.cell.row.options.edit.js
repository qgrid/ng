import {isArray} from '@grid/core/services/utility';

RowOptionsEdit.$inject = ['$scope'];
export default function RowOptionsEdit($scope) {
	this.openMenu = ($mdMenu, e) => $mdMenu.open(e);
	$scope.$on('$mdMenuClose', () => $scope.$view.edit.cell.cancel.execute());
}