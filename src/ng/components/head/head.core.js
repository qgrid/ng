import Directive from 'ng/directives/directive';
import Command from 'core/infrastructure/command';
import {noop} from 'core/services/utility';
import * as columnService from 'core/column/column.service';
import PipeUnit from 'core/pipe/units/pipe.unit'
import {VIEW_CORE_NAME, HEAD_CORE_NAME, TH_CORE_NAME} from 'ng/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, serviceFactory) {
		super();

		this.element = $element[0];
		this.$scope = $scope;
		Object.defineProperty($scope, '$view', {get: () => this.view});

		this.drop = new Command({
			canExecute: e => {
				if (e.source && e.source.key === TH_CORE_NAME) {
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: e => {
				const model = this.view.model;
				const view = model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						const sourceColumn = columns[sourceIndex].model;
						const targetColumn = columns[targetIndex].model;
						const indexMap = Array.from(model.columnList().index);
						indexMap.splice(sourceColumn.index, 1);
						indexMap.splice(targetColumn.index, 0, sourceColumn.key);
						model.columnList({index: indexMap});

						serviceFactory
							.service(this.view.model)
							.invalidate(
								'reorder', {
									target: targetIndex,
									source: sourceIndex
								},
								PipeUnit.column
							);
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				if (e.source.key === TH_CORE_NAME) {
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canMove !== false;
				}

				return false;
			},
			execute: noop
		});

		this.resize = new Command({
			canExecute: e => {
				if (e.source.key === TH_CORE_NAME) {
					const columns = columnService.lineView(this.view.model.view().columns).map(v => v.model);
					const map = columnService.map(columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			},
			execute: noop
		});
	}

	transfer(cell) {
		return {
			key: TH_CORE_NAME,
			value: cell.column.key
		};
	}
}

HeadCore.$inject = ['$scope', '$element', 'qgrid'];

export default {
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};