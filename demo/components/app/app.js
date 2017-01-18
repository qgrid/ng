'use strict';

Controller.$inject = ['Demo.PAGES', '$mdSidenav'];
export default function Controller(pages, $mdSidenav) {
	this.pages = pages;

	this.toggleMenu = () => {
		$mdSidenav('left').toggle();
	};
}