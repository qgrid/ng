import Component from '../../view/components/component';
import {AppError} from '@grid/core/infrastructure/error';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {Shortcut} from '@grid/core/shortcut/shortcut';
import {GRID_NAME} from '@grid/view/definition';

class TabTrap extends Component {
	constructor($element) {
		super(...arguments);

		this.traps = new Map();
		this.isActivating = false;

		const listener = new EventListener($element[0], new EventManager(this));
		this.using(listener.on('keydown', e => {
			const code = Shortcut.translate(e);
			if (code === 'tab' || code === 'shift+tab') {
				e.stopPropagation();
			}
		}));
	}

	activate(target) {
		if (this.isActivating) {
			return;
		}

		this.isActivating = true;
		try {
			if (this.roundTrip) {
				this.goRound(target);
			} else {
				this.exit(target);
			}

		}
		finally {
			this.isActivating = false;
		}
	}

	exit(target) {
		const e = {
			key: 'Tab',
			keyCode: 9,
			shiftKey: target === 'start'
		};

		const model = this.root.model;
		const shortcut = model.action().shortcut;
		shortcut.keyDown(e, 'tab-trap');
	}

	goRound(target) {
		switch (target) {
			case 'start': {
				const end = this.traps.get('end');
				end.focus();
				break;
			}
			case 'end': {
				const start = this.traps.get('start');
				start.focus();
				break;
			}
			default:
				throw new AppError('tab.trap', `Invalid target ${target}`);
		}
	}
}

TabTrap.$inject = ['$element'];

export default {
	transclude: true,
	controller: TabTrap,
	templateUrl: 'qgrid.plugin.tab-trap.tpl.html',
	require: {
		'root': `^^${GRID_NAME}`
	},
	bindings: {
		roundTrip: '@'
	}
};
