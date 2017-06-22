import Directive from './directive';
import {AUTOFOCUS_NAME, GRID_NAME} from '@grid/view/definition';
import {noop, isUndefined} from '@grid/core/utility';

class Autofocus extends Directive(AUTOFOCUS_NAME, {root: `${GRID_NAME}`}) {
	constructor($scope, $element, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;

		this.dataChangedOff = noop;
	}

	onInit() {
		this.dataChangedOff = this.model.viewChanged.watch(e => {
			if (e.hasChanges('rows') && e.state.rows.length > 0
				|| e.hasChanges('nodes') && e.state.nodes.length > 0) {
				this.$timeout(() => {
					if (this.table.body.rowCount === 0) {
						return;
					}

					const table = Object.keys(this.table.markup).find(p => p.startsWith('table'));
					if (isUndefined(table)) {
						return;
					}

					this.table.markup[table].focus();
					this.model.focus({
						rowIndex: 0,
						columnIndex: 0
					});
				}, 200);

				this.dataChangedOff();
			}
		});
	}

	get model() {
		return this.root.model;
	}

	get table() {
		return this.root.table;
	}

	onDestroy() {
		this.dataChangedOff();
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