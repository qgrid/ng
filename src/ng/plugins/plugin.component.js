import ModelComponent from 'ng/components/model.component';
import AppError from 'core/infrastructure/error';
import * as guard from 'core/infrastructure/guard';
import {merge, clone} from 'core/services/utility';
import TemplateLink from 'ng/components/template/template.link';
import {VIEW_CORE_NAME, GRID_NAME} from 'src/definition';

export default function (pluginName, modelNames = []) {
	guard.notNullOrEmpty(pluginName, 'pluginName');
	pluginName = pluginName.toLowerCase();

	class Plugin extends ModelComponent {
		constructor($scope, $element, $compile, $templateCache) {
			if (modelNames.length) {
				super(modelNames);
			}
			else {
				super();
			}

			this.$scope = $scope;
			this.$element = $element;
			this.template = new TemplateLink($compile, $templateCache);
		}

		onInitCore() {
			const inTransclusion = !this._view && this._root;
			if (!inTransclusion) {
				const templateUrl = `qgrid.plugins.${pluginName}.tpl.html`
				const link = this.template.link(
					templateUrl,
					this.resource
				);

				link(this.$element, this.$scope);
				const visibility = this.model.visibility;
				const plugins = clone(visibility().plugin);
				plugins[pluginName] = true;
				this.model.visibility({plugin: plugins});
			}

			super.onInitCore();
		}

		get resource() {
			const model = this.model;
			if (model.hasOwnProperty(pluginName)) {
				const pluginState = model[pluginName]();
				if (pluginState.hasOwnProperty('resource')) {
					return pluginState.resource;
				}
			}

			return model.plugin().resource;
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

		get isVisible() {
			return this.model.visibility().plugin[pluginName];
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