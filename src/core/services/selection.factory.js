import SingleSelectionService from 'core/services/selection.single';
import MultipleSelectionService from 'core/services/selection.multiple';

export default function(mode) {
	switch (mode) {
		case 'single': 
			return new SingleSelectionService();
		case 'multiple': 
			return new MultipleSelectionService();
	}

	//TODO: trow exception
}