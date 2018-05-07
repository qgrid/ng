Controller.$inject = ['$http', 'qgrid'];

export default function Controller($http, qgrid) {
	const model = qgrid.model();
	this.gridModel = model;

	model.style({
		for: {
			gender: function (node, column, context) {
				if (node.type === 'row') {
					context.class('female', {
						color: 'red'
					});
				}
			}
		}
	});

	this.getGenderLabel = node => {
		const rows = model.data().rows;
		switch (node.type) {
			case 'group': {
				const stat = node
					.rows
					.reduce(function (memo, index) {
						const row = rows[index];
						memo[row.gender] = memo[row.gender] + 1;
						return memo;
					}, {
							male: 0,
							female: 0
						});

				return 'male: ' + stat.male + ' female: ' + stat.female;
			}
			default: {
				const index = node.rows[0];
				return rows[index].gender;
			}
		}
	};

	$http.get('data/people/10000.json')
		.then(response => model.data({
			rows: response.data
		}));
}