import View from 'core/view/view';

export default class OverlayView extends View {
	constructor(model, markup){
		super();

		this.model = model;
		this.markup = markup;

		this.onInit();
	}

	onInit() {
		let overlayElement = this.markup.document.querySelector('q-grid-range-overlay');
		if (!overlayElement || overlayElement.length === 0) {
			overlayElement = this.markup.document.createElement('div');
			overlayElement.classList.add('q-grid-range-overlay');
			this.markup.document.body.appendChild(overlayElement);

			this.overlay = overlayElement;
		} else {
			this.overlay = overlayElement[0];
		}
	}

	position(start, end){
		if (!this.overlay) {
			return;
		}

		this.overlay.style.left = `${Math.min(start.pageX, end.pageX)}px`;
		this.overlay.style.top = `${Math.min(start.pageY, end.pageY)}px`;
		this.overlay.style.width = `${Math.abs(start.pageX - end.pageX)}px`;
		this.overlay.style.height = `${Math.abs(start.pageY - end.pageY)}px`;
	}

	show() {
		if (!this.overlay) {
			return;
		}

		this.overlay.style.visibility = 'visible';
	}

	hide() {
		if (!this.overlay) {
			return;
		}

		this.overlay.style.visibility = 'hidden';
	}
}