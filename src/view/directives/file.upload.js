import Directive from './directive';
import {FILE_UPLOAD_NAME, FILE_UPLOAD_LABEL_NAME, CAN_UPLOAD_NAME} from '@grid/view/definition';
import {AppError, EventListener, EventManager} from '@grid/core/infrastructure';

class FileUpload extends Directive(FILE_UPLOAD_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		
		this.listener = new EventListener(this.element, new EventManager(this));

		this.reader = new FileReader();
		this.reader.onloadend = e => this.setDataUrl(e);
	}

	onInit() {
		this.using(this.listener.on('change', this.upload));
		this.using(this.listener.on('click', this.onClick));
		this.using(this.listener.on('drop', this.upload));
	}

	onClick() {
		this.file = null;
		this.label = null;
	}

	upload(e) {
		if (!this.canUpload) {
			return;
		}

		const files = e.target.files;
		if (files.length > 1) {
			throw new AppError('file.upload', 'Can\'t upload several files');
		}
		
		const file = files[0] || null;
		if (file) {
			this.reader.readAsDataURL(file);
			this.label = file.name;
		}
	}

	setDataUrl(e) {
		if (e.target.readyState == FileReader.DONE) {
			this.$scope.$applyAsync(() => this.file = e.target.result);
		}
	}
}

FileUpload.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: {
		'file': `=${FILE_UPLOAD_NAME}`,
		'label': `=${FILE_UPLOAD_LABEL_NAME}`,
		'canUpload': `&${CAN_UPLOAD_NAME}`
	},
	controllerAs: '$fileUpload',
	controller: FileUpload,
	require: FileUpload.require,
	link: FileUpload.link,
	scope: false
};