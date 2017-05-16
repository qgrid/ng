import {AppError} from '@grid/core/infrastructure';
import {TD_CORE_NAME, TR_CORE_NAME} from '@grid/view/definition'

export function cell(path) {
	for (let node of path) {
		if (node.nodeName === 'TD' || node.nodeName === 'TH') {
			const ctrl = angular.element(node).controller(TD_CORE_NAME);
			if (!ctrl) {
				new AppError('path.find', `Can't find controller for ${node.nodeName}`);
			}

			return ctrl;
		}
	}

	return null;
}

export function row(path) {
	for (let node of path) {
		if (node.nodeName === 'TR') {
			const ctrl = angular.element(node).controller(TR_CORE_NAME);
			if (!ctrl) {
				new AppError('path.find', `Can't find controller for ${node.nodeName}`);
			}

			return ctrl;
		}
	}

	return null;
}