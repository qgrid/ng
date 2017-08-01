import * as Css from './css';

describe('Css', () => {
	let testStyleObject = {someStyle: {color: 'yellow'}, someStyle2: {visibility: 'hidden'}};
	let testObject = Css.sheet('q', 'style');

	describe('sheet', () => {

		it('should check whether Style tag was append to Head tag', () => {
			testObject.set(testStyleObject);

			let isStyleTagExist = document.getElementsByTagName('head')[0].lastChild instanceof HTMLStyleElement;

			expect(isStyleTagExist).to.be.equal(true);
		});
		it('should check whether Style tag was removed from Head tag', () => {
			testObject.remove();

			let isStyleTagExist = document.getElementsByTagName('head')[0].lastChild instanceof HTMLStyleElement;

			expect(isStyleTagExist).to.be.equal(false);
		});
	});
});
