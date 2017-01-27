import ModelComponent from './model.component';
import AppError from '../../core/infrastructure/error';
import {merge} from '../../core/services/utility';
import TemplateCore from './template/template.core';
import {VIEW_CORE_NAME, GRID_NAME} from '../../definition';

export default function (templateUrl = '', modelNames = []) {
	class Plugin extends ModelComponent {
		constructor($scope, $element, $compile, $templateCache) {
			if(modelNames.length) {
				super(modelNames);
			}
			else{
				super();
			}

			this.$scope = $scope;
			this.$element = $element;
			this.template = new TemplateCore($compile, $templateCache);
		}

		onInitCore() {
			const inTransclusion = !this._view && this._root;
			if (!inTransclusion) {
				const link = this.template.link(
					templateUrl,
					this.resource
				);

				link(this.$element, this.$scope);
			}

			super.onInitCore();
		}

		get resource(){
			return this.model.plugin().resource;
		}

		get model() {
			const model =
				this._model ||
				(this._view && this._view.model) ||
				(this._root && this._root.model);

			if (!model) {
				throw new AppError(
					'plugin.component',
					'Model is not defined');
			}

			return model;
		}
	}

	Plugin.$inject = [
		'$scope',
		'$element',
		'$compile',
		'$templateCache'
	];

	Plugin.component = settings => {
		const pluginSettings = {
			require: {
				'_view': `^^?${VIEW_CORE_NAME}`,
				'_root': `^^?${GRID_NAME}`
			},
			bindings: {
				'_model': '<model'
			}
		};

		merge(pluginSettings, settings);
		return pluginSettings;
	};

	return Plugin;
}