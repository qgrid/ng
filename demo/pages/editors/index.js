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
			title: 'Is Female',
			type: 'bool',
			value: (item, value) => isUndef(value) ? item.gender === 'female' : item.gender = value,
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
				fetch: (item) => {
					const deferred = $q.defer();

					$timeout(() => deferred.resolve(item.contact.email), 2000);

					return deferred.promise;
				}
			}
		}
	];

	$http.get('data/people/100.json')
		.then(function (response) {
			ctrl.rows = response.data;
		});
}