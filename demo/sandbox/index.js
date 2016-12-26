'use strict';

export default function Controller() {
	this.rows = [{firstName: 'Alex', lastName: 'Pre'}, {firstName: 'Pavel', lastName: 'Q'}];
	this.columns = [
		{key: 'firstName', title: 'First Name'},
		{key: 'lastName', title: 'Last Name'},
		{key: 'birthDate', title: 'Date of Birth'},
		{key: 'location', title: 'Location'},
		{key: 'zipCode', title: 'Zip'}
	];
}