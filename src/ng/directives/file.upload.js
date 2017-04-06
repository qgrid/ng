import Directive from './directive';
import {FILE_UPLOAD_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import AppError from 'core/infrastructure/error'

class FileUpload extends Directive(FILE_UPLOAD_NAME) {
	constructor($element) {
		super();

		this.element = $element[0];
		
		this.listener = new EventListener(this, this.element);
	}

	onInit() {
		this.listener.on('change', this.upload);
		this.listener.on('click', this.onClick);
	}

	onDestroy() {
		this.listener.off();
	}

	onClick() {
		this.file = null;
	}

	upload(e) {
		const files = e.target.files;
		if (files.length > 1) {
			throw new AppError('file.upload', `Multiple upload isn't able`);
		}
		this.file = files[0] || null;
	}
}

FileUpload.$inject = ['$element'];

export default {
	restrict: 'A',
	bindToController: {
		'file': `=${FILE_UPLOAD_NAME}`
	},
	controllerAs: '$fileUpload',
	controller: FileUpload,
	require: FileUpload.require,
	link: FileUpload.link
};