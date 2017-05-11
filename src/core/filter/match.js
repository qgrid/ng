import PredicateVisitor from '@grid/core/expression/predicate.visitor';
import buildExpression from '@grid/core/expression/expression.build';
import * as columnService from '@grid/core/column/column.service';
import {yes} from '@grid/core/services/utility';

export default function (context) {
	const model = context.model;
	const expression = buildExpression(model.filter().by);
	if (expression !== null) {
		const valueFactory = context.valueFactory;
		const columnMap = columnService.map(model.data().columns);
		const visitor = new PredicateVisitor(key => valueFactory(columnMap[key]));
		return visitor.visit(expression);
	}

	return yes;
}