import angular from 'angular';

Controller.$inject = ['$http', '$mdToast', 'qgrid', '$timeout'];
export default function Controller($http, $mdToast, qgrid, $timeout) {
	const ctrl = this;
	const isUndef = angular.isUndefined;

	this.commitCommand = new qgrid.Command({
		execute: e => {
			if (e.column.key === 'attachment' || e.column.key === 'avatar') {
				$timeout(() => {
					const filename = e.newLabel;
					$mdToast.show(
						$mdToast.simple()
							.textContent(`File ${filename} loaded`)
							.position('top right')
							.hideDelay(2000)
					);
					e.column.value(e.row, `https://fake.data.server.com/attachment/${encodeURI(filename)}`);
				}, 1000);
			}
		}
	});

	this.rows = [];
	this.columns = [
		{
			key: 'avatar',
			title: 'Avatar',
			type: 'image',
			width: 80,
			value: (item, value) => isUndef(value) ? item.avatar : item.avatar = value,
			labelPath: 'avatarFileName'
		},
		{
			key: 'name.last',
			title: 'Last Name',
			type: 'text',
			path: 'name.last'
		},
		{
			key: 'name.first',
			title: 'First Name',
			type: 'text',
			path: 'name.first'
		},
		{
			key: 'gender',
			title: 'Is Female',
			type: 'bool',
			trueValue: 'female',
			falseValue: 'male'
		},
		{
			key: 'birthday',
			title: 'Birthday',
			type: 'date'
		},
		{
			key: 'teammates',
			title: 'Teammates',
			type: 'reference',
			value: (item, value) => isUndef(value) ? item.teammates || [] : item.teammates = value,
			label: (item) =>
				(item.teammates || [])
					.filter(rowNo => !!ctrl.rows[rowNo])
					.map(rowNo => `${ctrl.rows[rowNo].name.last} ${ctrl.rows[rowNo].name.first}`)
					.join(', '),
			editorOptions: {
				modelFactory: () => {
					const model = qgrid.model();
					model
						.selection({
							mode: 'multiple',
							unit: 'row',
							key: {row: row => ctrl.rows.findIndex(r => r.name.last === row.name.last && r.name.first === row.name.first)}
						})
						.columnList({
							generation: 'deep'
						})
						.data({
							pipe: [(data, context, next) => {
								$http.get('data/people/10.json')
									.then(response => {
										return next(response.data);
									});
							}].concat(qgrid.pipeUnit.default)
						});

					return model;
				}
			}
		},
		{
			key: 'comment',
			title: 'Comment',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.comment || '' : item.comment = value,
			editor: 'text-area'
		},
		{
			key: 'password',
			title: 'Password',
			type: 'password',
			value: (item, value) => isUndef(value) ? item.password || '' : item.password = value
		},
		{
			key: 'contact.address.zip',
			title: 'Zip',
			type: 'id',
			path: 'contact.address.zip'
		},
		{
			key: 'contact.address.state',
			title: 'State',
			type: 'text',
			path: 'contact.address.state'
		},
		{
			key: 'contact.address.city',
			title: 'City',
			type: 'text',
			path: 'contact.address.city'
		},
		{
			key: 'contact.phone',
			title: 'Contact Phones',
			type: 'array',
			path: 'contact.phone',
		},
		{
			key: 'contact.email.primary',
			title: 'Primary Email',
			type: 'email',
			value: (item, value) => isUndef(value) ? item.contact.email[0] : item.contact.email[0] = value
		},
		{
			key: 'likes',
			title: 'Likes',
			type: 'array'
		},
		{
			key: 'memberSince',
			title: 'Member Since',
			type: 'date'
		},
		{
			key: 'modifiedTime',
			title: 'Modified Time',
			type: 'time',
			value: (item, value) => isUndef(value) ? item.modified || '' : item.modified = value
		},
		{
			key: 'webPage',
			title: 'Web Page',
			type: 'url',
			value: (item, value) => isUndef(value)
				? item.webPage || `https://corp.portal.com/${item.name.last}.${item.name.first}`
				: item.webPage = value,
			label: (item, label) => isUndef(label)
				? item.webPageLabel || `${item.name.last} ${item.name.first}`
				: item.webPageLabel = label
		},
		{
			key: 'attachment',
			title: 'Attachment',
			type: 'file',
			value: (item, value) => isUndef(value) ? item.attachment : item.attachment = value,
			label: (item, label) => isUndef(label) ? item.attachmentLabel || null : item.attachmentLabel = label,
			fetch: (item, d) => $http().then(result => d.resolve(result))
		}
	];

	$http.get('data/people/100.json')
		.then(response => {
			ctrl.rows = response.data;

			ctrl.rows[0].password = 'foo';
			ctrl.rows[3].password = 'bar';
			ctrl.rows[4].comment = 'Johnson Creek is a 25-mile (40 km) tributary of the Willamette River in the Portland.';
			ctrl.rows[2].teammates = [0];		// array of ids of reference data set
		});
}