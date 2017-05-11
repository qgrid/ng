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
			key: 'isFemale',
			title: 'Is Female',
			type: 'bool',
			value: (item, value) => isUndef(value) ? item.gender === 'female' : item.gender = value,
			editor: 'dropdown',
			editorOptions: {
				fetch: ['female', 'male']
			}
		},
		{
			key: 'gender',
			title: 'Gender',
			type: 'text',
			value: (item, value) => isUndef(value) ? item.gender: item.gender = value,
			editor: 'dropdown',
			editorOptions: {
				fetch: (item, d) => {
					$timeout(() => d.resolve(['female', 'male']), 2000);
				}
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
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}