import angular from 'angular';

export function cell(path) {
	for (let node of path) {
		if (node.nodeName === 'TD') {
			const scope = angular.element(node).scope();
			if (scope.hasOwnProperty('$cell')) {
				return scope.$cell;
			}
		}
	}

	return null;
}