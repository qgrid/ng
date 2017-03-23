Controller.$inject = ['$http', '$interval', 'qgrid'];
export default function Controller($http, $interval, qgrid) {
	this.model = qgrid.model();
	this.rows = [];

	$http.get('data/people/100.json')
		.then(response => this.rows = response.data);

	const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	this.femaleColor = randomColor();
	this.maleColor = randomColor();

	this.model.style({
		row: (row, dom) => {
			if (row.gender === 'female') {
				dom.style({background: this.femaleColor});
			}

			if (row.gender === 'male') {
				dom.style({background: this.maleColor});
			}
		}
	});

	$interval(() => {
		this.femaleColor = randomColor();
	}, 1000);

	$interval(() => {
		this.maleColor = randomColor();
	}, 500);

}