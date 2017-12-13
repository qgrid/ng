import {Model} from '@grid/core/infrastructure';
import {GridService} from '@grid/core/services';
import {Rest} from './rest';

describe('rest plugin', () => {
	let config;
	let model;
	let service;

	beforeEach(() => {
		model = new Model();
		service = new GridService(model);
		config = null;
	});

	describe('url configuration', () => {
		it('should throw if url is not provided', () => {
			expect(() => new Rest(model, config)).to.throw('qgrid.rest: REST endpoint URL is required');
		});
	});

	// it('should call passed function', done => {
	// 	const fetch = chai.spy(() => Promise.resolve([]));
	// 	const rest = new Rest(model, fetch);
	//
	// 	service.invalidate().then(() => {
	// 		expect(fetch).to.have.been.called();
	// 		done();
	// 	});
	// });
});
