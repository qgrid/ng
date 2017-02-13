import PluginComponent from '../plugin.component';
import {POPUP_NAME} from '../definition';
import TemplatePath from 'core/template/template.path';

require('./popup.scss');

TemplatePath
	.register(POPUP_NAME, (template, popup) => {
		return {
			model: 'popup',
			resource: `${popup.id}:${template.for}`
		};
	});

class Popup extends PluginComponent('popup', ['popup'], ['$transclude']) {
	constructor() {
		super(...arguments);
	}

	onInit() {
	}

	show() {
		let template = null;
		let templateScope = null;

		this.$transclude((clone, scope) => {
			template = clone;
			templateScope = scope;

			this.$element.append(clone);
		});

		template.remove();
		templateScope.$destroy();

		super.show();
	}

	get resource() {
		return this.model.popup().resource;
	}
}

export default Popup.component({
	transclude: true,
	controller: Popup,
	controllerAs: '$popup',
	bindings: {
		id: '@'
	}
});