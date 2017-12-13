import {typeMapping as operations} from './operations';
import suggestFactory from './suggest';

export function whereSchema(builder, $q, context) {
	const {suggest, suggests} = suggestFactory($q, context)('#field');

	return builder
		.node('#logical', function (schema) {
			schema
				.attr('serialize', {
					'#logical-op': ['value']
				})
				.select('#logical-op', {
					classes: ['cb-operation'],
					options: ['AND', 'OR'],
					value: 'AND'
				})
				.iconButton('#add-logical', {
					icon: 'add',
					click: (node) => {
						node.addChildAfter(node.clone());
					}
				})
				.iconButton('#remove-logical', {
					icon: 'close',
					isVisible: node => node.level > 1,
					click: node => {
						node.remove();
					}
				})
				.node('#condition', function (schema) {
					schema
						.attr('placeholder', true)
						.attr('class', {
							placeholder: node => node.attr('placeholder')
						})
						.attr('serialize', {
							'#field': ['value'],
							'#operator': ['value'],
							'#value': ['value'],
							'#from': ['value'],
							'#to': ['value'],
							'#in-operand': ['values'],
							'@attr': ['placeholder']
						})
						.select('#field', {
							classes: ['cb-operation', 'field'],
							options: context.fields.map(f => f.name),
							value: context.fields.length ? context.fields[0].name : '',
							getLabel: (node, line, name) => {
								const field = context.fields.filter(f => f.name === name)[0];

								return (field && field.label) || null
							},
							getType: (node, line, name) => {
								const field = context.fields.filter(f => f.name === name)[0];

								return (field && field.type) || 'text';
							},
							change: function (node, line) {
								if (node.attr('placeholder')) {
									node.addAfter(node.clone());
									node.attr('placeholder', false);
								}

								const field = this.value,
									type = this.getType(field),
									ops = operations[type] || [],
									op = line.get('#operator').expressions[0];

								if (ops.indexOf(op.value) < 0) {
									op.value = ops.length ? ops[0] : null;
									op.change();
								}
								else {
									// var operand = line.get('#operand').expressions[0];
									// operand.state = validator(field)(operand.value);
									// if(operand.state.length){
									// 	operand.value = null;
									// 	operand.state = validator(field)(operand.value);
									// }
								}
							}
						})
						.select('#operator', {
							classes: ['cb-operation'],
							getOptions: (node, line) => {
								const field = line.get('#field').expressions[0],
									name = field.value,
									type = field.getType(name);

								return type ? operations[type] : [];
							},
							value: 'EQUALS',
							change: function (node, line) {
								if (node.attr('placeholder')) {
									node.addAfter(node.clone());
									node.attr('placeholder', false);
								}

								switch (this.value.toLowerCase()) {
									case 'equals':
									case 'not equals':
									case 'greater than':
									case 'less than':
									case 'greater or eq. to':
									case 'less or eq. to':
									case 'like':
									case 'not like':
									case 'starts with':
									case 'ends with': {
										const value = getValue(line, '#operand', ['value', 'values']);

										line.put('#operand', node, function (schema) {
											schema.autocomplete('#value', {
												$watch: {
													// 'value': function () {
													// 	const field = line.get('#field').expressions[0].value;
													// 	this.state = validator(field)(this.value);
													// }
												},
												state: [],
												classes: {
													'cb-operand': true,
													'has-value': function () {
														return !!this.value;
													},
													'invalid': function (node) {
														return !this.isValid(node);
													}
												},
												options: suggest,
												value: value,
												placeholderText: 'Select value'
											});
										});
										break;
									}
									case 'between':
										line.put('#operand', node, function (schema) {
											schema
												.autocomplete('#from', {
													$watch: {
														// 'value': function () {
														// 	const field = line.get('#field').expressions[0].value;
														// 	this.state = validator(field)(this.value);
														// }
													},
													classes: {
														'cb-operand': true,
														'has-value': function () {
															return !!this.value;
														},
														'invalid': function (node) {
															return !this.isValid(node);
														}
													},
													state: [],
													options: suggest,
													value: null,
													placeholderText: 'Select value'
												})
												.label('#and', {
													classes: ['cb-operand', 'cb-operand-and-label'],
													text: 'AND'
												})
												.autocomplete('#to', {
													$watch: {
														// 'value': function () {
														// 	const field = line.get('#field').expressions[0].value;
														// 	this.state = validator(field)(this.value);
														// }
													},
													classes: {
														'cb-operand': true,
														'has-value': function () {
															return !!this.value;
														},
														'invalid': function (node) {
															return !this.isValid(node);
														}
													},
													state: [],
													options: suggest,
													value: null,
													placeholderText: 'Select value'
												});
										});
										break;
									case 'in':
										line.put('#operand', node, function (schema) {
											schema
												.label('#in-open', {
													text: '('
												})
												.multiselect('#in-operand', {
													$watch: {
														// 'values': function () {
														// 	const field = line.get('#field').expressions[0].value;
														// 	this.state = validator(field)(this.values);
														// }
													},
													classes: {
														'cb-operand': true,
														'has-value': function () {
															return !!this.values.length;
														},
														'invalid': function (node) {
															return !this.isValid(node);
														}
													},
													state: [],
													values: [],
													options: suggests,
													placeholderText: 'Select value'
												})
												.label('#in-close', {
													text: ')'
												});
										});
										break;
									case 'is empty':
									case 'is not empty':
										line.put('#operand', node, angular.noop);
										break;
								}
							}
						})
						.group('#operand', function (schema) {
							schema.autocomplete('#value', {
								$watch: {
									// 'value': function (newValue, oldValue, node, line) {
									// 	const field = line.get('#field').expressions[0].value;
									// 	this.state = validator(field)(this.value);
									// }
								},
								classes: {
									'cb-operand': true,
									'has-value': function () {
										return !!this.value;
									},
									'invalid': function (node) {
										return !this.isValid(node);
									}
								},
								values: [],
								value: null,
								state: [],
								placeholderText: 'Select value',
								options: suggest,
								change: function (node) {
									if (this.value) {
										if (node.attr('placeholder')) {
											node.addAfter(node.clone());
											node.attr('placeholder', false);
										}
									}
								}
							})
						})
						.iconButton('#remove', {
							icon: 'close',
							isVisible: node => !node.attr('placeholder'),
							click: node => {
								node.remove();
							}
						})
				})
		});
}

function getValue(line, id, props) {
	const group = line.get(id);
	if (group) {
		if (group.expressions.length === 1) {
			const expr = group.expressions[0],
				prop = props.filter(p => expr.hasOwnProperty(p))[0];

			if (prop) {
				const value = expr[prop];
				if (angular.isArray(value) && value.length) {
					return value[0]
				}

				return value;
			}
		}
	}

	return null;
}
