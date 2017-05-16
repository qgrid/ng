export class Vscroll {
	constructor(vscroll, apply) {
		this.vscroll = vscroll;
		this.apply = apply;
	}

	factory(settings) {
		const ctx = this.vscroll(settings);
		ctx.container.apply = this.apply;
		return ctx;
	}
}