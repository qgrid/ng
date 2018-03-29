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
			controller: ['$scope', function ($scope) {
				$scope.$pager = pagerView;
				$scope.$pagerTarget = {
					value: pagerView.current + 1,
					keydown: e => {
						if (!panelRef) {
							return;
						}

						let code = Shortcut.translate(e);
						if (code.startsWith('numpad')) {
							code = code.slice(6);
						}

						const target = $scope.$pagerTarget;
						const value = target.value || 0;

						switch (code) {
							case 'enter': {
								panelRef.close();
								if (value) {
									pagerView.current = value - 1;
								}
								break;
							}
							case 'up': {
								if (value < pagerView.total) {
									target.value = value + 1;
								}
								break;
							}
							case 'down': {
								if (value > 1) {
									target.value = value - 1;
								}
								break;
							}
							case 'left':
							case 'right':
							case 'backspace': {
								break;
							}
							default: {
								const digit = Number.parseInt(code);
								const page = Number.parseInt('' + value + digit);
								const min = 1;
								const max = pagerView.totalPages;
								const isValid = page >= min && page <= max && !isNaN(digit);

								if (!isValid) {
									page > max ? target.value = max : target.value = min;
									e.preventDefault();
								}
							}
						}
					}
				};

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

	get resource() {
		return this.model.pagination().resource;
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