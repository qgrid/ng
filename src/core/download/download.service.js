export function download(csv, $window, $document) {
	const csvFile = new Blob([csv], {type: 'text/csv'});
	const downloadLink = $document[0].createElement('a');
	const body = $document[0].body;

	downloadLink.download = 'exportTable.csv';
	downloadLink.href = $window.URL.createObjectURL(csvFile);
	downloadLink.style.display = 'none';
	body.appendChild(downloadLink);
	downloadLink.click();
	body.removeChild(downloadLink);
}