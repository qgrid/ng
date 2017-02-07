export default class Component {
	constructor() {
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