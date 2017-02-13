import ModelComponent from 'ng/components/model.component';
import AppError from 'core/infrastructure/error';
import * as guard from 'core/infrastructure/guard';
import {merge, clone} from 'core/services/utility';
import TemplateLink from 'ng/components/template/template.link';
import {BOX_CORE_NAME, GRID_NAME} from 'src/definition';

export default function (pluginName, modelNames = [], inject = []) {
	guard.notNullOrEmpty(pluginName, 'pluginName');

	pluginName = pluginName.toLowerCase();

	class Plugin extends ModelComponent {
		constructor($scope, $element, $attrs, $compile, $templateCache) {
			if (modelNames.length) {
				super(modelNames);
			}
			else {
				super();
			}

			this.$scope = $scope;
			this.$element = $element;
			this.$attrs = $attrs;
			this.template = new TemplateLink($compile, $templateCache);
			this.templateScope = null;

			Array.from(arguments)
				.filter((a, i) => i >= 5)
				.forEach((a, i) => this[inject[i]] = a);
		}

		onInitCore() {
				if (this.isReady()) {
					const visibility = this.model.visibility;
					const plugins = clone(visibility().plugin);
					if (!plugins.hasOwnProperty(pluginName)) {
						plugins[pluginName] = true;
						this.model.visibility({plugin: plugins});
					}

					this.model.visibilityChanged.watch(e => {
						if (e.changes.hasOwnProperty('plugin')) {
							const newValue = e.changes.plugin.newValue;
							if (newValue[pluginName] !== this.isShown) {
								if (e.state.plugin[pluginName]) {
									this.templateScope = this.show();
								}
								else {
									this.templateScope = this.hide();
								}
							}
						}
					});
				}

			super.onInitCore();
		}

		isReady() {
			// not in transclusion
			return this._box || !this._root;
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
				(this._box && this._box.model) ||
				(this._root && this._root.model);

			if (!model) {
				throw new AppError(
					'plugin.component',
					'Model is not defined');
			}

			return model;
		}

		show() {
			const templateUrl = `qgrid.plugin.${pluginName}.tpl.html`
			const templateScope = this.$scope.$new();
			const link = this.template.link(
				templateUrl,
				this.resource
			);

			link(this.$element, templateScope);
			return templateScope;
		}

		hide() {
			if (this.templateScope) {
				this.templateScope.$destroy();
				this.$element[0].innerHTML = '';
			}

			return null;
		}

		get isShown(){
			return this.templateScope !== null;
		}
	}

	Plugin.$inject = ([
		'$scope',
		'$element',
		'$attrs',
		'$compile',
		'$templateCache'
	]).concat(inject);

	Plugin.component = settings => {
		const pluginSettings = {
			require: {
				'_box': `^^?${BOX_CORE_NAME}`,
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