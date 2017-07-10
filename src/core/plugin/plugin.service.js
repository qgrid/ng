import {AppError} from '@grid/core/infrastructure';

export function resolve(model, name) {
	const lib = model.plugin().imports[name];
	if (!lib) {
		switch (name) {
			case 'xlsx': {
				throw new AppError('plugin.service', 'To use export plugin for xlsx format please add http://github.com/SheetJS/js-xlsx library to your project');
			}
			case 'fileSaver': {
				throw new AppError('plugin.service', 'To use export plugin for file saving please add https://github.com/eligrey/FileSaver.js library to your project');
			}
			case 'pdf': {
				throw new AppError('plugin.service', 'To use export plugin for pdf format please add https://github.com/MrRio/jsPDF and https://github.com/simonbengtsson/jsPDF-AutoTable libraries to your project');
			}
			default: {
				throw new AppError('import library', `Can't find ${name} library in imports`);
			}
		}
	}
	return lib;
}
