import Directive from './directive';
import {RESIZE_NAME, VIEW_CORE_NAME, DRAG_NAME, GRID_NAME} from '@grid/view/definition';
import {GRID_PREFIX} from '@grid/core/definition';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {clone} from '@grid/core/utility';

class Resize extends Directive(RESIZE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $document) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		const document = $document[0];

		this.divider = document.createElement('div');

		this.listener = {
			divider: new EventListener(this.divider, new EventManager(this)),
			document: new EventListener(document, new EventManager(this))
		};

		this.context = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}

	onLink() {
		if (this.canResize(this.event())) {
			this.divider.classList.add(`${GRID_PREFIX}-divider`);

			this.listener.divider.on('mousedown', this.dragStart);
			this.element.appendChild(this.divider);
		}
	}

	onDestroy() {
		super.onDestroy();

		this.listener.divider.off();
		this.listener.document.off();
	}

	dragStart(e) {
		e.preventDefault();

		const context = this.context;
		context.width = this.element.clientWidth;
		context.height = this.element.clientHeight;
		context.x = e.screenX;
		context.y = e.screenY;

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

		state.set(this.key, {
			width: context.width + e.screenX - context.x,
			height: context.height + e.screenY - context.y
		});
		
		layout({ [this.path]: state });
	}

	dragEnd() {
		this.listener.document.off();
		const model = this.view.model;

		this.$scope.$applyAsync(() => model.drag({isActive: false}));
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

Resize.$inject = ['$scope', '$element', '$document'];

export default {
	restrict: 'A',
	bindToController: {
		'key': `<${RESIZE_NAME}`,
		'path': `@${RESIZE_NAME}Path`,
		'canResize': `&${GRID_NAME}CanResize`,
		'transfer': `&${DRAG_NAME}`,
	},
	controllerAs: '$resize',
	controller: Resize,
	require: Resize.require,
	link: Resize.link,
	scope: false
};

