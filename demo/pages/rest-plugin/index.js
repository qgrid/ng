import angular from 'angular';

Controller.$inject = ['$http', '$timeout', 'qgrid'];
export default function Controller($http, $timeout, qgrid) {
	const ctrl = this;
	const isUndef = angular.isUndefined;

	const columns = [
		{
			key: 'id',
			title: 'ID',
			type: 'id',
			editor: 'number'
		},
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
			title: 'Gender',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.gender : item.gender = value,
			editor: 'dropdown',
			editorOptions: {
				fetch: ['female', 'male']
			}
		},
		{
			key: 'birthday',
			title: 'Birthday',
			type: 'date'
		},
		{
			key: 'comment',
			title: 'Comment',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.comment || '' : item.comment = value,
			editor: 'text-area',
			width: 200,
			maxLength: 8000
		},
		{
			key: 'password',
			title: 'Password',
			type: 'password',
			value: (item, value) => isUndef(value) ? item.password || '' : item.password = value,
			isDefault: false
		},
		{
			key: 'teammates',
			title: 'Teammates',
			type: 'reference',
			value: (item, value) => isUndef(value) ? item.teammates || [] : item.teammates = value,
			label: (item) => (item.teammates || []).map(mate => `${mate.name.last} ${mate.name.first}`).join(', '),
			editorOptions: {
				modelFactory: () => {
					const model = qgrid.model();
					model
						.selection({
							mode: 'multiple',
							unit: 'row'
						})
						.columnList({
							generation: 'deep'
						})
						.data({
							rows: ctrl.rows
						});

					return model;
				}
			}
		},
		{
			key: 'likes',
			title: 'Likes',
			type: 'array'
		},
		{
			key: 'salary',
			title: 'Salary',
			type: 'currency',
			value: (item, v) => isUndef(v) ? item.salary || 0 : item.salary = v
		},
		{
			key: 'memberSince',
			title: 'Member Since',
			type: 'date',
			isDefault: false
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
		},
		{
			key: 'isOnline',
			title: 'Online',
			type: 'bool',
			value: (item, value) => isUndef(value) ? isUndef(item.isOnline) ? null : item.isOnline : item.isOnline = value
		},
	];
	this.url = 'data/people/100.json';

	ctrl.gridModel = qgrid.model();
	ctrl.gridModel.data({columns});
}