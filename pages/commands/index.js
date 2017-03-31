Controller.$inject = ['$http', 'qgrid'];
export default function Controller($http, qgrid) {
	const ctrl = this;
	this.rows = [];

	this.enterCommand = new qgrid.Command({
		canExecute: cell => {
			return cell.columnIndex !== 0;
		}
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}