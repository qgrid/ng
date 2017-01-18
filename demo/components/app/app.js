'use strict';

Controller.$inject = ['Demo.PAGES', '$mdSidenav'];
export default function Controller(pages, $mdSidenav) {
	this.pages = pages;
	this.page = null;

	this.toggleMenu = () => {
		$mdSidenav('left').toggle();
	};

	this.onSelectionChanged = selection => {
		this.page = selection;
	};
}