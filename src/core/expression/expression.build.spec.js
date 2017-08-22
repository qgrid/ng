import * as ExpressionBuild from './expression.build';

describe('Expression Build', () => {
	let test1 = {
		key: {
			expression: 'expression'
		}
	};

	let test2 = {
		key: {
			expression: 'expression',
			items: ['a','b','c']
		}
	};

	describe('should built expression into root object', () => {
		it('', () => {
			let root = ExpressionBuild.build(test1);
			expect(root.left).to.equal('expression');
		});
	});

	describe('', () => {
		it('should built expression and items into root object', () => {
			let root = ExpressionBuild.build(test2);
			expect(root.left).to.equal('expression');
			expect(root.right.left.left.right.toString()).to.equal('a,b,c');
		});
	});
});
