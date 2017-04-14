import AppError from 'core/infrastructure/error';
import Element from './element';

class CellCore {
	get model() {
		return null;
	}

	rect() {
		return {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		};
	}

	addClass() {
	}

	removeClass() {
	}

	get width() {
		return 0;
	}

	get height() {
		return 0;
	}
}

const empty = new CellCore();

export default class Cell extends Element {
	static get empty() {
		return empty;
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

