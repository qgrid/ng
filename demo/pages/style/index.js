Controller.$inject = ['$http', '$interval', 'qgrid'];
export default function Controller($http, $interval, qgrid) {
	this.model = qgrid.model();
	this.rows = [];

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);

	const randomColor = () => `${Math.floor(Math.random() * 16777215).toString(16)}`;
	this.femaleColor = randomColor();
	this.maleColor = randomColor();

	this.model.style({
		row: (row, dom) => {
			if (row.gender === 'female') {
				dom.class(`female-row-${this.femaleColor}`, {background: '#' + this.femaleColor});
			}

			if (row.gender === 'male') {
				dom.class(`male-row-${this.maleColor}`, {background: '#' + this.maleColor});
			}
		},
		cell: (row, column, dom, context) => {
			if (column.key === 'birthday') {
				dom.class('red-birthday', {background: '#f00', color: '#fff'});
			}

			if (column.key === 'name.last') {
				if(context.value(row, context.columns.map.gender) === 'female') {
					dom.class('female-name-last', {background: '#ff0', color: '#000'});
				}
			}

			if (column.key === 'name.first') {
				if (context.row % 2) {
					dom.class('first-name-even', {background: '#000', color: '#fff'});
				}
				else {
					dom.class('first-name-odd', {background: '#fff', color: '#000'});
				}
			}
		}
	});

	$interval(() => {
		this.femaleColor = randomColor();
	}, 3000);

	$interval(() => {
		this.maleColor = randomColor();
	}, 1000);

}