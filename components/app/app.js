'use strict';

Controller.$inject = [
	'Demo.PAGES',
	'$mdSidenav',
	'$location'
];

export default function Controller(pages, $mdSidenav, $location) {
	this.pages = pages;
	this.page = null;

	this.toggleMenu = () => {
		$mdSidenav('left').toggle();
	};

	this.onSelectionChanged = selection => {
		this.page = selection;
	};


	const path = ($location.path() || '/home').toLowerCase().substring(1);
	const page = this.pages.filter(p => p.path.toLowerCase() === path)[0] || this.pages[0];
	if (page) {
		this.page = page;
	}
}