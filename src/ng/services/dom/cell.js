import AppError from 'core/infrastructure/error';
import {Element, ElementCore} from './element';

class CellCore extends ElementCore {
	constructor() {
		super();
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

