import SelectionService from 'core/services/selection';

export default class SingleSelectionService extends SelectionService {
	constructor(){
		super();
		
		this.selectedItem = null;
	}	

	_selectItem(item, isSelected){
		if (!isSelected) {
			if (this._isItemSelected(item)) {
				this.selectedItem = null;
			}
		} else {
			this.selectedItem = item;
		}
	}

	_isItemSelected(item){
		return this.selectedItem === item;
	}

	get selected() {
		return [this.selectedItem];
	}
}