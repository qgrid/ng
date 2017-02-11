import Directive from 'ng/directives/directive';
import Command from 'core/infrastructure/command';
import {noop} from 'core/services/utility';
import * as columnService from 'core/column/column.service';
import {VIEW_CORE_NAME, HEAD_CORE_NAME, TH_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.element = $element[0];
		this.$scope = $scope;
		Object.defineProperty($scope, '$view', {get: () => this.view});

		this.drop = new Command({
			canExecute: e => {
				if (e.source.key === TH_CORE_NAME) {
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: e => {
				const view = this.view.model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						// TODO: full copy? impacting pef. on pivoting?
						const sourceColumn = columns[sourceIndex];
						columns.splice(sourceIndex, 1);
						columns.splice(targetIndex, 0, sourceColumn);
						view({columns: Array.from(columnRows)});
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
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.source.value) && map[e.source.value].canResize !== false;
				}

				return false;
			},
			execute: noop
		});
	}

	onInit() {
		this.view.markup.head = this.element;

		this.view.model.layoutChanged.watch(e => {
			if (e.changes.hasOwnProperty('scroll')) {
				this.element.parentNode.parentNode.scrollLeft = e.state.scroll.left;
			}
		});
	}

	transfer(cell) {
		return {
			key: TH_CORE_NAME,
			value: cell.column.key
		}
	}
}

HeadCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};