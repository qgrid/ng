import Directive from '../directive';
import {VIEW_CORE_NAME, BODY_CORE_NAME} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener';
import Command from 'core/infrastructure/Command';
import * as pathFinder from 'ng/services/path.find';
import Log from 'core/infrastructure/log';

class BodyCore extends Directive(BODY_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, this.element);
		Object.defineProperty($scope, '$view', {get: () => this.view});

		let mode = 'view';
		this.cellEdit = new Command({
			canExecute: cell => {
				const model = this.view.model;
				if (mode !== 'edit' && model.edit().mode === 'cell') {
					// use shouldn't explicitly set it in the template, cause we have here canEdit !== false
					return cell.column.canEdit !== false;
				}

				return false;
			},
			execute: cell => {
				Log.info('body.core', 'edit mode on');

				mode = 'edit';
				cell.mode(mode);
			}
		});

		this.cellEditSubmit = new Command({
			execute: cell => {
				Log.info('body.core', 'edit mode off');

				mode = 'view';
				cell.mode(mode);
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
