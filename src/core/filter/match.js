import PredicateVisitor from 'core/expression/predicate.visitor';
import buildExpression from 'core/expression/expression.build';

export default function (context) {
	const model = context.model;
	const valueFactory = context.valueFactory;
	const expression = buildExpression(model.filter().by);
	const visitor = new PredicateVisitor(valueFactory);
	return visitor.visit(expression);
}