import Directive from 'ng/directives/directive';
import {VIEWPORT_CORE_NAME, VIEW_CORE_NAME} from 'src/definition';
import EventListener from 'core/infrastructure/event.listener'

class ViewportCore extends Directive(VIEWPORT_CORE_NAME, {'view': `^^${VIEW_CORE_NAME}`}) {
	constructor($element) {
		super();

		this.element = $element[0];
		this.listener = new EventListener(this, $element[0]);
		this.listener.on('scroll', this.onScroll);
	}

	onScroll(){
		const element = this.element;
		const layout = this.view.model.layout;

		layout({
			scroll: {
				top: element.scrollTop,
				left: element.scrollLeft,
				width: element.scrollWidth,
				height: element.scrollHeight
			}
		})
	}

	onDestroy(){
		this.listener.off();
	}
}

ViewportCore.$inject = ['$element'];

export default {
	restrict: 'A',
	controllerAs: '$viewport',
	controller: ViewportCore,
	require: ViewportCore.require,
	link: ViewportCore.link,
	scope: {}
};