import {AppError} from '@grid/core/infrastructure';

export function download(name, data, mimeType, extension) {
	if (!window.fileSaver) {
		throw new AppError('fileSaver', 'To use export plugin for pdf format please add https://github.com/eligrey/FileSaver.js library to your project');
	}
	const blob = new Blob([data], {type: mimeType});
	const type = extension ? extension : mimeType.split('/')[1];
	const fileName = `${name}.${type}`;
	fileSaver.saveAs(blob, fileName);
}