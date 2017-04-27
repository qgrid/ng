import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
function downloadCSV(csv, filename) {
	const csvFile = new Blob([csv], {type: "text/csv"});
	const downloadLink = document.createElement("a");

	downloadLink.download = filename;
	downloadLink.href = window.URL.createObjectURL(csvFile);
	downloadLink.style.display = "none";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}

TemplatePath
	.register(EXPORT_NAME, () => {
		return {
			model: 'export',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('export');
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			execute: () => {
				alert('export to ' + this.type);
				downloadCSV(csv, 'kate');
			}
		});
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$export',
	bindings: {
		'type': '@'
	}
});