import angular from 'angular';

Controller.$inject = ['$http', '$q', '$timeout'];
export default function Controller($http, $q, $timeout) {
	const ctrl = this;
	const isUndef = angular.isUndefined;

	this.rows = [];
	this.columns = [
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
			value: (item, value) => isUndef(value) ? item.gender: item.gender = value,
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
			key: 'contact.email.primary',
			title: 'Primary Email',
			type: 'email',
			value: (item, value) => isUndef(value)
				? item.contact.email.primary || item.contact.email[0]
				: item.contact.email.primary = value,
			editor: 'dropdown',
			editorOptions: {
				fetch: item => {
					const deferred = $q.defer();

					$timeout(() => deferred.resolve(item.contact.email), 2000);

					return deferred.promise;
				}
			}
		},
		{
			key: 'contact.email.secondary',
			title: 'Secondary Email',
			type: 'email',
			value: (item, value) => isUndef(value)
				? item.contact.email.secondary || ''
				: item.contact.email.secondary = value,
			editor: 'autocomplete',
			editorOptions: {
				fetch: (item, d, search='') => {
					$http.get('data/people/100.json').then(function (response) {
						const emails = response.data.reduce((result, item) => {
							return result.concat(item.contact.email.filter(email => email.indexOf(search) > -1));
						}, []);
						d.resolve(emails);
					});
				}
			}
		},
		{
			key: 'chief',
			title: 'Chief',
			type: 'text',
			value: (item, value) => isUndef(value)
				? item.chief || null
				: item.chief = value !== null ? value.id : null,
			label: item => {
				if (isUndef(item.chief) || item.chief === null) {
					return '';
				}
				const selectedOption = ctrl.dropdownOptions.find(option => option.id === item.chief);
				return `${selectedOption.name.last} ${selectedOption.name.first}`;
			},
			editor: 'dropdown',
			editorOptions: {
				fetch: (item, d) => {
					d.resolve(ctrl.dropdownOptions);
				},
				label: option => `${option.name.last} ${option.name.first}`
			}
		}
	];

	ctrl.dropdownOptions = [];

	$http.get('data/people/100.json').then(function (response) {
		ctrl.dropdownOptions = response.data.map((option, index) => {
			option.id = index;
			return option;
		});
	});

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}