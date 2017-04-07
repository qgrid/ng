import Directive from './directive';
import {FILE_UPLOAD_NAME, FILE_DATA_URL_NAME, CAN_UPLOAD_NAME, ON_UPLOAD_NAME} from 'ng/definition';
import EventListener from 'core/infrastructure/event.listener';
import AppError from 'core/infrastructure/error'

class FileUpload extends Directive(FILE_UPLOAD_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		
		this.listener = new EventListener(this, this.element);

		this.reader = new FileReader();
		this.reader.onloadend = e => this.setDataUrl(e);
	}

	onInit() {
		this.listener.on('change', this.upload);
		this.listener.on('click', this.onClick);
		this.listener.on('drop', this.upload);
	}

	onDestroy() {
		this.listener.off();
	}

	onClick() {
		this.file = null;
	}

	upload(e) {
		if (!this.canUpload) {
			return;
		}
		const files = e.target.files;
		if (files.length > 1) {
			throw new AppError('file.upload', `Multiple upload isn't able`);
		}
		
		this.file = files[0] || null;
		if (this.file) {
			this.reader.readAsDataURL(this.file);
		}
		
		this.$scope.$evalAsync(() => this.onUpload({
			$event: {
				source: this.file
			}
		}));
	}

	setDataUrl(e) {
		if (e.target.readyState == FileReader.DONE) {
			this.dataUrl = e.target.result;
		}
	}
}

FileUpload.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {
		'file': `=${FILE_UPLOAD_NAME}`,
		'dataUrl': `=${FILE_DATA_URL_NAME}`,
		'onUpload': `&${ON_UPLOAD_NAME}`,
		'canUpload': `&${CAN_UPLOAD_NAME}`
	},
	controllerAs: '$fileUpload',
	controller: FileUpload,
	require: FileUpload.require,
	link: FileUpload.link
};