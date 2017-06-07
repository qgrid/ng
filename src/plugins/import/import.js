import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Command, EventListener} from '@grid/core/infrastructure';
import {Xlsx} from './xlsx';

function getType(name) {
	const dotDelimeter = /[.]/g.test(name);
	if (dotDelimeter) {
		let type = name.split('.');
		return type[type.length - 1];
	}
	return 'unknown';
}

TemplatePath
	.register(IMPORT_NAME, () => {
		return {
			model: 'import',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('import');
class Import extends Plugin {
	constructor() {
		super(...arguments);
		this.eventListener = new EventListener(this, this.$element[0]);
		this.upload = new Command({});
	}

	handleFile(e) {
		const files = e.target.files;
		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => {
				const data = e.target.result;
				const type = file.type === '' ? getType(file.name) : file.type;
				switch (type) {
					case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':{
						const xlsx = new Xlsx();
						this.model.data(xlsx.read(data));
						break;
					}
					case 'json':
						alert('Kate json');
						console.log(data);
						this.model.data({
							rows: data
						});
						//add json to model
						break;
					case 'text/xml':
						alert('Kate xml');
						//add xml to model
						break;
					case 'unknown':
					default:
						alert('This is not valid file type ' + getType(file));
				}
			};
			reader.readAsBinaryString(file);
		}
	}

	get resource() {
		return this.model.import().resource;
	}

	onInit() {
		this.eventListener.on('change', this.handleFile);
	}

	onDestroy() {
		this.eventListener.off();
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$import',
	bindings: {
		'type': '@',
		'importOptions': '@'
	}
});