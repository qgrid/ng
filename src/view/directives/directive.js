import {DisposableView} from '@grid/core/view';

export default function (name, require = {}) {
	const dependencies =
		Object.keys(require)
			.reduce(function (memo, key) {
				memo.push({
					key: key,
					selector: require[key]
				});

				return memo;
			}, []);

	class Directive extends DisposableView {
		constructor() {
			super();

			this.$postLink = this.onLink;
			this.$onDestroy = this.onDestroyCore;
		}

		onInit() {
		}

		onLink() {
		}

		onDestroy() {
		}

		onDestroyCore() {
			this.dispose();
			this.onDestroy();
		}

		static link($scope, $element, $attrs, $ctrls) {
			const ctrl = $ctrls[0];

			for (let i = 0, length = dependencies.length; i < length; i++) {
				const d = dependencies[i];
				ctrl[d.key] = $ctrls[i + 1];
			}

			ctrl.onInit($attrs);
			if (ctrl.onDestroy) {
				$scope.$on('$destroy', ctrl.onDestroy.bind(ctrl));
			}
		}
	}

	Directive.require = [name].concat(dependencies.map(d => d.selector));
	return Directive;
}