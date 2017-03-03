import Directive from './directive';
import {RESIZE_NAME, VIEW_CORE_NAME, DRAG_NAME, GRID_NAME} from 'ng/definition';
import {GRID_PREFIX} from 'core/definition';
import EventListener from 'core/infrastructure/event.listener';
import {clone} from 'core/services/utility';

class Resize extends Directive(RESIZE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $document, $timeout) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$document = $document;
		this.$timeout = $timeout;
		this.divider = angular.element(`<div class="${GRID_PREFIX}-divider"></div>`);

		this.listener = {
			divider: new EventListener(this, this.divider[0]),
			document: new EventListener(this, this.$document[0])
		};

		this.context = {
			x: 0,
			width: 0
		};
	}

	onInit() {
		if (this.canResize(this.event())) {
			this.listener.divider.on('mousedown', this.dragStart);
			this.$timeout(() => this.$element.append(this.divider)); // TODO: WTF?
		}
	}

	onDestroy() {
		this.listener.divider.off();
		this.listener.document.off();
	}

	dragStart(e) {
		e.preventDefault();

		const context = this.context;
		context.width = this.$element[0].clientWidth;
		context.x = e.screenX;

		this.listener.document.on('mousemove', this.drag);
		this.listener.document.on('mouseup', this.dragEnd);

		const model = this.view.model;
		model.drag({isActive: true});
	}

	drag(e) {
		const model = this.view.model;
		const context = this.context;
		const layout = model.layout;
		const state = clone(layout()[this.path]);

		state[this.key] = {width: context.width + e.screenX - context.x};
		layout({[this.path]: state});
	}

	dragEnd() {
		this.listener.document.off();

		const model = this.view.model;
		model.drag({isActive: false});
	}

	event() {
		const source = this.transfer();
		return {
			$event: {
				source: source,
				target: null
			}
		};
	}
}

Resize.$inject = ['$scope', '$element', '$document', '$timeout'];

export default {
	restrict: 'A',
	bindToController: {
		'key': `<${RESIZE_NAME}`,
		'path': `@${RESIZE_NAME}Path`,
		'canResize': `&${GRID_NAME}CanResize`,
		'transfer': `&${DRAG_NAME}`
	},
	controllerAs: '$resize',
	controller: Resize,
	require: Resize.require,
	link: Resize.link
};