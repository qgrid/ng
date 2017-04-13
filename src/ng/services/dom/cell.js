import Element from './element';
import AppError from 'core/infrastructure/error';

export default class Cell extends Element {
	static get empty() {
		return Element.empty;
	}

	get model() {
		const $scope = angular.element(this.element).scope();
		if (!$scope) {
			throw new AppError('cell', `Scope for is not found`)
		}
		return $scope.$cell;
	}
}

