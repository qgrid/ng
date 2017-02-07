import StickyHead from './sticky.head';
import StickyFoot from './sticky.foot';
import Error from '../infrastructure/error';

export default class StickyFactory {
	static create(target, view, table, source, withClone) {
		switch (target) {
			case 'head':
				return new StickyHead(view, table, source, withClone);
			case 'foot':
				return new StickyFoot(view, table, source, withClone);
			default:
				new Error('sticky.core', `Unknown target ${target} for sticky`);
		}
	}
}
