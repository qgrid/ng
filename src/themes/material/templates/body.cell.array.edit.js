import {Shortcut} from '@grid/core/shortcut/shortcut';

ArrayEdit.$inject = ['$scope', '$element'];

export default function ArrayEdit($scope, $element) {
	this.cell = () => $scope.$editor || $scope.$view.edit.cell;
	this.text = '';

	this.keydown = e => {
		const code = Shortcut.translate(e);
		if (code === 'enter') {
			if (this.text && this.text.length) {
				e.stopPropagation();
			}
		}
	};
}