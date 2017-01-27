export default class Component {
	constructor() {
		this.$onInit = this.onInitCore;
		this.$onDestroy = this.onDestroyCore;
	}

	onInitCore() {
		this.onInit();
	}

	onDestroyCore() {
		this.onDestroy()
	}

	onInit() {
	}

	onDestroy() {
	}
}