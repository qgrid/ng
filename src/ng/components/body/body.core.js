import Directive from '../directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener';
import Command from 'core/infrastructure/Command';
import * as pathFinder from 'ng/services/path.find';
import * as columnService from 'core/column/column.service';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
		Object.defineProperty($scope, '$view', {get: () => this.view});

		this.cellEdit = new Command({
			canExecute: cell => {
				const model = this.view.model;
				if (model.edit().mode === 'cell') {
					const columnMap = columnService.map(model.data().columns);
					if (columnMap.hasOwnProperty(cell.column.key)) {
						// use shouldn't explicitly set it in the template, cause we have here canEdit !== false
						// TODO: wrap all data columns to Column class
						return cell.column.canEdit !== false;
					}
				}

				return false;
			},
			execute: cell => {
				cell.mode('edit');
			}
		});

		this.cellEditSubmit = new Command({
			execute: cell => {
				cell.mode('view');
			}
		});
	}

	onInit() {
		this.listener.on('click', this.onClick);
	}

	onDestroy() {
		this.listener.off();
	}

	onClick(e) {
		const cell = pathFinder.cell(e.path);
		if (cell && this.cellEdit.canExecute(cell)) {
			this.cellEdit.execute(cell);
		}
	}
}

BodyCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$body',
	controller: BodyCore,
	require: BodyCore.require,
	link: BodyCore.link,
	scope: true
};
