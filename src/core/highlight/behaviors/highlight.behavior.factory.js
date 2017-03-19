import DefaultHighlight from './default.highlight';
import cellsBuilderFactory from './cells.builder.factory';

export default (model, markup) => {

	const cellsBuilder = cellsBuilderFactory(model, markup);
	
	return new DefaultHighlight(model, markup, cellsBuilder);
};