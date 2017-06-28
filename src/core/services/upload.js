function upload(element) {
	const doc = element.ownerDocument;
	const input = doc.createElement('input');
	input.type = 'file';
	input.className = 'ng-hide';
	element.appendChild(input);
	input.click();
}

export {
	upload
};