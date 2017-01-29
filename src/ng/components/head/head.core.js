import Directive from '../directive';
import Command from 'core/infrastructure/command';
import {VIEW_CORE_NAME, HEAD_CORE_NAME, TH_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		this.drop = new Command({
			canExecute: e => e.source.key === TH_CORE_NAME,
			execute: e => {
				const view = this.view.model.view;
				const columns = view().columns;
				const targetIndex = columns.findIndex(c => c.key === e.target.value);
				const sourceIndex = columns.findIndex(c=> c.key === e.source.value);
				if(targetIndex >= 0 && sourceIndex >= 0){
					const newColumns = Array.from(columns);
					newColumns.splice(sourceIndex, 1);
					newColumns.splice(targetIndex, 0, columns[sourceIndex]);
					view({columns: newColumns});
				}
			}
		});
	}

	onInit() {
	}

	transfer(cell) {
		return {
			key: TH_CORE_NAME,
			value: cell.$scope.$column.key
		}
	}
}

HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};