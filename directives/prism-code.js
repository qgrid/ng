import Prism from 'prismjs/components/prism-core';

export default function Code() {
	return {
		restrict: 'E',
		link: function (scope, element) {
			Prism.highlightElement(element[0]);
		}
	};
}
