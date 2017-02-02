export default class Component {
	constructor() {
		this.$onInit = this.onInitCore;
		this.$onChanges = this.onChangeCore;
		this.$onDestroy = this.onDestroyCore;
	}

	onInitCore() {
		this.onInit();
	}

	onChangeCore() {
		this.onChange();
	}

	onDestroyCore() {
		this.onDestroy();
	}

	onInit() {
	}

	onChange() {
	}

	onDestroy() {
	}
}