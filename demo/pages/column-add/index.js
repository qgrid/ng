Controller.$inject = ['qgrid'];
export default function Controller(qgrid) {
	const ctrl = this;
	this.rows = [];
	this.columns = [];
	this.gridModel = qgrid();

	this.init = () => {
		let n = 100;
		for (var i = 0; i < n; i++)
			ctrl.rows.push({});
	};

	var getHex = () => "#"+((1<<24)*Math.random()|0).toString(16);

	this.add = () => {
		var hex = getHex();

		this.columns = this.columns.concat({
			key: hex,
			title: hex
		});

		let n = 100;
		for (var i = 0; i < n; i++) {
			ctrl.rows[i][hex] = hex;
		}

		ctrl.rows = ctrl.rows.slice();
		const body = this.gridModel.body;
		const bodyResource = body().resource;
		bodyResource.data[hex] = `<div style="background-color: ${hex}; width: 10px; height: 10px;"></div>`;
	};

	this.clear = () => ctrl.columns = [];

	this.init();
}