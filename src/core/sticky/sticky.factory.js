import StickyHead from './sticky.head';
import StickyFoot from './sticky.foot';
import Error from '../infrastructure/error';

export default class StickyFactory {
	static create(target, view, table, origin, withClone) {
		switch (target) {
			case 'head':
				return new StickyHead(view, table, origin, withClone);
			case 'foot':
				return new StickyFoot(view, table, origin, withClone);
			default:
				new Error('sticky.core', `Unknown target ${target} for sticky`);
		}
	}
}
