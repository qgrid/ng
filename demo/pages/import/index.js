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
	let rows = [];
	ctrl.model = qgrid.model();

	ctrl.model
		.scroll({
			mode: 'virtual'
		})
		.data({
			pipe: [(data, context, next) => {
				const size = ctrl.model.pagination().size;
				next(rows = rows.concat(arrayPlug(size)));
			}]
				.concat(qgrid.pipeUnit.view)
		});

}