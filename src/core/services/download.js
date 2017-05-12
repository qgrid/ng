import guid from '@grid/core/services/guid';

export default function download(csv) {
	const csvFile = new Blob([csv], {type: 'text/csv'});
	const downloadLink = document.createElement('a');
	const body = document.body;

	downloadLink.download = guid() ? `${guid()}.csv` : 'exportTable.csv';
	downloadLink.href = window.URL.createObjectURL(csvFile);
	downloadLink.style.display = 'none';
	body.appendChild(downloadLink);
	downloadLink.click();
	body.removeChild(downloadLink);
}