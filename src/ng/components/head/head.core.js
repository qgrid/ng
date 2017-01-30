import Directive from '../directive';
import Command from '../../../core/infrastructure/command';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from '../../../definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();
	}

	onInit() {
	}

	sortDirection(column){
		const sort = this.view.model.sort();
		const index = sort.by.findIndex(s => Object.keys(s)[0] === column.key);
		if(index >= 0){
			const item = sort.by[index];
			return item[Object.keys(item)[0]];
		}

		return null;
	}

	nextDirection(dir){
		const sort = this.view.model.sort();
		const index = sort.by.findIndex(s => Object.keys(s)[0] === column.key);
		if(index >= 0){
			const item = sort.by[index];
			item[1] =
			//item[Object.keys(item)[0]];
		}

		return 'asc';
	}
}

//HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};