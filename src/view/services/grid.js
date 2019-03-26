import { Model } from '@grid/core/infrastructure';
import { Command } from '@grid/core/command';
import { Action } from '@grid/core/action';
import { GridService } from '@grid/core/services';
import { Node } from '@grid/core/node';
import { Pipe } from '@grid/core/pipe';
import { PipeUnit } from '@grid/core/pipe/pipe.unit';
import { noop, identity } from '@grid/core/utility';
import { getFactory as valueFactory } from '@grid/core/services/value';
import { getFactory as labelFactory } from '@grid/core/services/label';
import { RowDetailsStatus } from '@grid/core/row-details';
import { Composite } from '@grid/core/infrastructure/composite';

export default class Grid {
	constructor() {
	}

	model() {
		return new Model();
	}

	service(model) {
		return new GridService(model);
	}

	get noop() {
		return noop;
	}

	get identity() {
		return identity;
	}

	get pipe() {
		return Pipe;
	}

	get pipeUnit() {
		return PipeUnit;
	}

	get Command() {
		return Command;
	}

	get Action() {
		return Action;
	}

	get Node() {
		return Node;
	}

	get RowDetailsStatus() {
		return RowDetailsStatus;
	}

	get valueFactory() {
		return valueFactory;
	}

	get labelFactory() {
		return labelFactory;
	}

	get compose() {
		return Composite;
	}
}

Grid.$inject = [];