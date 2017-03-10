import View from 'core/view/view';
import AppError from 'core/infrastructure/error';

export default class OverlayView extends View {
	constructor(model, markup){
		super();

		this.model = model;
		this.markup = markup;

		this.onInit();
	}

	onInit() {
	}

	position(start, end){
		if (!this.overlay) {
			throw new AppError(					
				'overlay',
				'Overlay element has not been created. Call show() emthod first.');
		}

		this.overlay.style.left = `${Math.min(start.x, end.x)}px`;
		this.overlay.style.top = `${Math.min(start.y, end.y)}px`;
		this.overlay.style.width = `${Math.abs(start.x - end.x)}px`;
		this.overlay.style.height = `${Math.abs(start.y - end.y)}px`;
	}

	show() {
		if (this.overlay){
			this.hide();
		}

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

	hide() {
		if (!this.overlay) {
			throw new AppError(					
				'overlay',
				'Overlay element has not been created. Call show() emthod first.');
		}

		this.overlay.remove();
		this.overlay = null;
	}
}