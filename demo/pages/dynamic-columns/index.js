Controller.$inject = ['qgrid'];
export default function Controller(qgrid) {
	const ctrl = this;
	this.rows = [];
	this.columns = [];
	this.gridModel = qgrid.model();
	const ROW_COUNT = 100;

	this.addRows = () => {
		for (let i = 0; i < ROW_COUNT; i++) {
			ctrl.rows.push({});
		}
	};

	const getHex = () => '#' + ((1 << 24) * Math.random() | 0).toString(16);

	this.addColumn = () => {
		const hex = getHex();
		this.columns =
			this.columns.concat({
				key: hex,
				title: hex
			});

		for (let i = 0; i < ROW_COUNT; i++) {
			ctrl.rows[i][hex] = hex;
		}

		ctrl.rows = Array.from(ctrl.rows);
	};

	this.clear = () => ctrl.columns = [];
	this.addRows();
}
