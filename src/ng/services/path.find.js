export function cell(path){
	for (let node of path) {
		if (node.nodeName === 'TD' || node.nodeName === 'TH') {
			const scope = angular.element(node).scope();
			if (scope.hasOwnProperty('$cell')) {
				return scope.$cell;
			}
		}
	}

	return null;
}

export function row(path) {
	for (let node of path) {
		if (node.nodeName === 'TR') {
			const scope = angular.element(node).scope();
			if (scope.hasOwnProperty('$row')) {
				return scope.$row;
			}
		}
	}

	return null;
}