import Directive from './directive';
import {AUTOSIZE_NAME} from '@grid/view/definition';

class Autosize extends Directive(AUTOSIZE_NAME) {
	constructor($scope, $element, $attrs, $timeout, $document) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
		this.$document = $document;
		this.body = $document[0].body;
		this.$attrs = $attrs;
		this.cache = {};
		this.referenceElement = null;
		this.selector = null;
	}

	onInit() {
		this.selector = this.$attrs[AUTOSIZE_NAME];
	}

	calculateWidth(text) {
		let width = 0;
		if (text) {
			// TODO: a hack to prevent material flex layout inheritance
			const container = document.createElement('div');
			const test = container.appendChild(document.createElement('span'));
			const referenceStyle = this.referenceElement[0].style;

			test.textContent = text;
			test.style.lineHeight = referenceStyle.lineHeight;
			test.style.borderBox = referenceStyle.borderBox;
			test.style.border = referenceStyle.border;
			test.style.font = referenceStyle.font;
			test.style.whiteSpace = 'pre';
			test.style.visibility = 'hidden';

			this.body.append(container);
			width = test.offsetWidth;
			container.remove();
		}

		return width;
	}

	width(text) {
		if (!this.referenceElement || !this.referenceElement.length) {
			this.referenceElement = this.selector && this.$element.find(this.selector) || this.$element;
		}

		if (!this.cache.hasOwnProperty(text)) {
			this.cache[text] = this.calculateWidth(text);
		}

		return this.cache[text];
	}
}

Autosize.$inject = ['$scope', '$element', '$attrs', '$timeout', '$document'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$autosize',
	controller: Autosize,
	require: Autosize.require,
	link: Autosize.link
};