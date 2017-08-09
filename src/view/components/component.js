import {DisposableView} from '@grid/core/view';

export default class Component extends DisposableView {
	constructor() {
		super();

		this.$onInit = this.onInitCore;
		this.$onChanges = this.onChangeCore;
		this.$onDestroy = this.onDestroyCore;
		this.$postLink = this.onLinkCore;
	}

	onInitCore() {
		this.onInit();
	}

	onLinkCore() {
		this.onLink();
	}

	onChangeCore() {
		this.onChange();
	}

	onDestroyCore() {
		this.dispose();
		this.onDestroy();
	}

	onInit() {
	}

	onLink() {
	}

	onChange() {
	}

	onDestroy() {
	}
}