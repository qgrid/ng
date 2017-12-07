import Directive from './directive';
import {AUTOSIZE_NAME} from '@grid/view/definition';

class Autosize extends Directive(AUTOSIZE_NAME) {
	constructor($scope, $element, $attrs, $timeout, $document) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$timeout = $timeout;
		this.$document = $document;
		this.$attrs = $attrs;
	}

	onInit() {
		let $element = this.$element,
			document = this.$document[0],
			body = document.body,
			selector = this.$attrs.autosize,
			focusElement = null,
			actualWidth = 0,
			actualText = '';

		function calculateWidth(text) {
			let width = 0;
			if (text) {
				// TODO: a hack to prevent material flex layout inheritance
				const container = document.createElement('div');
				const test = container.appendChild(document.createElement('span'));
				const referenceStyle = focusElement[0].style;

				test.textContent = text;
				test.style.lineHeight = referenceStyle.lineHeight;
				test.style.borderBox = referenceStyle.borderBox;
				test.style.border = referenceStyle.border;
				test.style.font = referenceStyle.font;
				test.style.whiteSpace = 'pre';
				test.style.visibility = 'hidden';

				body.append(container);
				// TODO: cache widths be text ?
				width = test.offsetWidth;
				container.remove();
			}

			return width;
		}

		this.width = function (text) {
			if (!focusElement || !focusElement[0] || !focusElement.css('font')) {
				focusElement = selector && $element.find(selector) || this.$element;
				actualWidth = calculateWidth(text);
				return actualWidth;
			}

			if (actualText === text) {
				return actualWidth;
			}

			actualText = text;
			actualWidth = calculateWidth(text);
			return actualWidth;
		};
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