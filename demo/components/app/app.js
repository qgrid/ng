'use strict';

Controller.$inject = ['Demo.PAGES'];
export default function Controller(pages) {
	this.pages = pages;
}