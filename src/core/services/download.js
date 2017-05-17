import {guid} from '../services';

export default function download(data, textMimeType) {
	const csvFile = new Blob([data], {type: `text/${textMimeType}`});
	const downloadLink = document.createElement('a');
	const body = document.body;

	downloadLink.download = guid() ? `${guid()}.${textMimeType}` : `exportTable.${textMimeType}`;
	downloadLink.href = window.URL.createObjectURL(csvFile);
	downloadLink.style.display = 'none';
	body.appendChild(downloadLink);
	downloadLink.click();
	body.removeChild(downloadLink);
}