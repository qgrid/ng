import ModelComponent from '@grid/view/components/model.component';
import {AppError, Guard} from '@grid/core/infrastructure';
import {merge, clone, assignWith} from '@grid/core/utility';
import TemplateLink from '@grid/view/components/template/template.link';
import {BOX_CORE_NAME, GRID_NAME} from '@grid/view/definition';

export default function (pluginName, context) {
	Guard.notNullOrEmpty(pluginName, 'pluginName');

	context = assignWith({
		models: [],
		inject: []
	}, context);

	const inject = [
		'$scope',
		'$element',
		'$attrs',
		'$compile',
		'$templateCache'
	];

	pluginName = pluginName.toLowerCase();

	class Plugin extends ModelComponent {
		constructor($scope, $element, $attrs, $compile, $templateCache) {
			if (context.models.length) {
				super(context.models);
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
				.filter((a, i) => i >= inject.length)
				.forEach((a, i) => this[context.inject[i]] = a);
		}

		onInitCore() {
			if (this.isLinked()) {
				if (this.kind === 'layout') {
					this.bindToVisibility();
				}
				else {
					this.show();
				}
			}

			super.onInitCore();
		}

		bindToVisibility() {
			const model = this.model;
			const visibility = model.visibility;
			let tryToShow = false;
			this.using(model.visibilityChanged.watch(e => {
				if (e.hasChanges('plugin')) {
					const plugins = e.state.plugin;
					const pluginState = plugins[pluginName];
					if (pluginState !== this.isShown) {
						if (pluginState) {
							if (!tryToShow) {
								tryToShow = true;
								try {
									this.show();
								}
								finally {
									tryToShow = false;
								}
							}
						}
						else {
							this.hide();
						}
					}
				}
			}));

			const plugins = clone(visibility().plugin);
			if (!plugins.hasOwnProperty(pluginName)) {
				plugins[pluginName] = true;
				model.visibility({plugin: plugins});
			}
		}

		isLinked() {
			// not in transclusion
			return this._box || !this._root;
		}

		isReady() {
			const model =
				this._model ||
				(this._box && this._box.model) ||
				(this._root && this._root.model);

			return !!model;
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
			if (this.isShown) {
				throw new AppError('plugin.component', `Plugin ${pluginName} is already shown`);
			}

			const templateUrl = `qgrid.plugin.${pluginName}.tpl.html`;
			const templateScope = this.$scope.$new();
			const link = this.template.link(
				templateUrl,
				this.resource,
				this.resourceKey
			);

			link(this.$element, templateScope);
			this.templateScope = templateScope;

			return templateScope;
		}

		hide() {
			if (this.templateScope) {
				this.templateScope.$destroy();
				this.templateScope = null;
				this.$element[0].innerHTML = '';
			}

			return null;
		}

		get isShown() {
			return this.templateScope !== null;
		}

		get resourceKey() {
			return ['content', '$default'];
		}

		get kind() {
			return 'control';
		}
	}

	Plugin.$inject = inject.concat(context.inject);

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