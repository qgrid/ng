import Directive from './directive';
import {AUTOFOCUS_NAME, GRID_NAME} from '@grid/view/definition';

class Autofocus extends Directive(AUTOFOCUS_NAME, {root: `${GRID_NAME}`}) {
	constructor($scope, $element, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
	}

	onInit() {
		this.model.dataChanged.on(e => {
			if (e.hasChanges('rows') && e.state.rows.length > 0) {
				this.$timeout(() => {
					const table = this.$element.find('table')[0];
					table.focus();
					this.model.focus({
						rowIndex: 0,
						columnIndex: 0
					});
				}, 200);
			}
		});
	}

	get model() {
		return this.root.model;
	}
}

Autofocus.$inject = ['$scope', '$element', '$timeout'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$autofocus',
	controller: Autofocus,
	require: Autofocus.require,
	link: Autofocus.link,
	scope: false
};