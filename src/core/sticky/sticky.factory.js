import StickyHead from './sticky.head';
import StickyFoot from './sticky.foot';
import Error from '../infrastructure/error';

export default class StickyFactory {
	static create(target, view, table, origin) {
		switch (target) {
			case 'head':
				return new StickyHead(view, table, origin);
			case 'foot':
				return new StickyFoot(view, table, origin);
			default:
				new Error('sticky.core', `Unknown target ${target} for sticky`);
		}
	}
}
