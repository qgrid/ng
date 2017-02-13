import SelectionService from 'core/services/selection';

export default class SingleSelectionService extends SelectionService {
	constructor(){
		super();
		
		this.selectionSet = new Set();
	}

	_selectItem(item, isSelected){
		if (!isSelected) {
			this.selectionSet.delete(item);
		} else {
			this.selectionSet.add(item);
		}
	}

	_isItemSelected(item){
		return this.selectionSet.has(item);
	}

	get selected() {
		return Array.from(this.selectionSet);
	}
}