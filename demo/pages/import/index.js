function arrayPlug(size) {
	const result = [];
	const emptyRow = {
		birthday: '',
		contact: {
			address: {
				city: '',
				state: '',
				street: '',
				zip: ''
			},
			email: [],
			phone: [],
			region: ''
		},
		gender: '',
		likes: [],
		memberSince: '',
		name: {
			first: '',
			last: ''
		}
	};
	for (let i = 0; i < size; i++) {
		result.push(emptyRow);
	}

	return result;
}

Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	const model = qgrid.model();
	let rows = [];
	ctrl.model = model;

	model.scroll({
		mode: 'virtual'
	});

	ctrl.model.data({
		pipe: [(data, context, next) => {
			const size = model.pagination().size;
			next(rows = rows.concat(arrayPlug(size)));
		}].concat(qgrid.pipeUnit.view)
	});
}