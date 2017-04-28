import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';
// import {get as valueFactory} from 'core/services/value';
function iterate(obj) {
	for (let property of obj) {
		if (obj.hasOwnProperty(property)) {
			if (typeof obj[property] == "object")
				iterate(obj[property]);
			else
				console.log(property + "   " + obj[property]);
		}
	}
}

TemplatePath
	.register(EXPORT_NAME, () => {
		return {
			model: 'export',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('export', {inject: ['$window', '$document']});
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			canExecute: () => this.type.toLowerCase() === 'csv',
			execute: () => {
				const csv = this._toCsv();
				this._download(csv);
			}
		});
	}

	get rows() {
		return this.model.data().rows;
	}

	get columns() {
		return this.model.data().columns;
	}

	_toCsv() {
		let result = '';
		const head = this.columns.map(column => {
			return column.title
		}).join(",");
		iterate(this.rows[0]);
		return result + head;
	}

	_download(csv) {
		const csvFile = new Blob([csv], {type: "text/csv"});
		const downloadLink = this.$document[0].createElement("a");
		const body = this.$document[0].body;

		downloadLink.download = 'exportTable.csv';
		downloadLink.href = this.$window.URL.createObjectURL(csvFile);
		downloadLink.style.display = "none";
		body.appendChild(downloadLink);
		downloadLink.click();
		body.removeChild(downloadLink);
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$export',
	bindings: {
		'type': '@'
	}
});