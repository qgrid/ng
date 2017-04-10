import Element from './element';
import AppError from 'core/infrastructure/error';

class CellCore {
	constructor() {
	}

	get model() {
		return null;
	}

	rect() {
		return {};
	}
}

export default class Cell extends Element {
	static get empty() {
		return new CellCore();
	}
	get model() {
		const $scope = angular.element(this.element).scope();
		if (!$scope) {
			throw new AppError('cell', `Scope for is not found`)
		}
		return $scope.$cell;
	}

	rect() {
		return this.element.getBoundingClientRect();
	}
}

