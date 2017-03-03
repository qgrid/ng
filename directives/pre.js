export default function Pre ($compile) {
	return {
		restrict: 'E',
		link: function (scope, element) {
			$compile(element.contents())(scope);
		}
	};
}

Pre.$inject = ['$compile'];