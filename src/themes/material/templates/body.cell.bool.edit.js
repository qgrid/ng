BoolEdit.$inject = ['$scope'];
export default function BoolEdit($scope) {
	this.cell = () => $scope.$editor || $scope.$view.edit.cell;

	// entering edit mode means toggling boolean value
	this.cell().value = !this.cell().value;

	this.trueValue = () => {
		const value = this.cell().column.trueValue;
		if (angular.isString(value)) {
			return `'${value}'`;
		}

		return value;
	};

	this.falseValue = () => {
		const value = this.cell().column.falseValue;
		if (angular.isString(value)) {
			return `'${value}'`;
		}

		return value;
	};

	this.isIndeterminate = () => {
		const cell = this.cell();
		return cell.column.isIndeterminate(cell.value);
	};

	this.isChecked = () => {
		const cell = this.cell();
		return cell.column.isChecked(cell.value);
	};
}