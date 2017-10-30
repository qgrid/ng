import Component from '../../view/components/component';
import {AppError} from '@grid/core/infrastructure/error';

class TabTrap extends Component {
	constructor() {
		super();

		this.traps = new Map();
		this.isActivating = false;
	}

	activate(target) {
		if (this.isActivating) {
			return;
		}

		this.isActivating = true;
		try {
			switch (target) {
				case 'start':
					const end = this.traps.get('end');
					end.focus();
					break;
				case 'end':
					const start = this.traps.get('start');
					start.focus();
					break;
				default:
					throw new AppError('tab.trap', `Invalid target ${target}`)
			}
		}
		finally {
			this.isActivating = false;
		}
	}
}

TabTrap.$inject = [];

export default {
	transclude: true,
	controller: TabTrap,
	templateUrl: 'qgrid.plugin.tab-trap.tpl.html'
};