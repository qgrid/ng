import PluginComponent from '../plugin.component';
import { PAGER_NAME } from '../definition';
import { TemplatePath } from '@grid/core/template';
import { PagerView } from '@grid/plugin/pager/pager.view';
import { Shortcut } from '@grid/core/shortcut/shortcut';

TemplatePath
	.register(PAGER_NAME, () => {
		return {
			model: 'pagination',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('pager', {
	inject: ['$mdPanel', '$element', '$document']
});

class Pager extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.$scope.$pager = new PagerView(this.model);
	}

	showTargetPanel(event) {
		if (!event) {
			event = {
				target: this.$element[0]
			};
		}

		const mdPanel = this.$mdPanel;
		const position = mdPanel.newPanelPosition()
			.relativeTo(event.target)
			.addPanelPosition(mdPanel.xPosition.ALIGN_START, mdPanel.yPosition.ALIGN_TOPS);
		const pagerView = this.$scope.$pager;
		const onClose = mdPanelRef => mdPanelRef.destroy();

		let panelRef;
		const config = {
			attachTo: angular.element(this.$document[0].body), // eslint-disable-line no-undef
			controller: ['$scope', '$element', function ($scope, $element) {

				$element[0].addEventListener('keydown', e => {
					if (panelRef && Shortcut.translate(e) === 'enter') {
						panelRef.close();
					}
				});

				$scope.$pager = {
					totalPages: pagerView.totalPages,
					target: pagerView.current + 1
				};

				$scope.$on('$destroy', () => {
					const target = $scope.$pager.target;
					if (1 <= target && target <= pagerView.totalPages) {
						pagerView.current = $scope.$pager.target - 1;
					}
				});
			}],
			templateUrl: 'qgrid.plugin.pager-target.tpl.html',
			panelClass: 'q-grid-pager-target',
			position: position,
			openFrom: event,
			clickOutsideToClose: true,
			escapeToClose: true,
			onCloseSuccess: onClose,
			focusOnOpen: false,
			zIndex: 2
		};

		mdPanel.open(config)
			.then(function (result) {
				panelRef = result;
			});
	}
}

export default Pager.component({
	controller: Pager,
	controllerAs: '$pagerPlugin',
	bindings: {
		'paginationSize': '<size',
		'paginationSizeList': '<sizeList',
		'mode': '@'
	}
});