import {PluginView} from '../plugin.view';
import {isString, isEqual} from '@grid/core/utility';
import * as validationService from '@grid/core/validation/validation.service';

export class ValidatorView extends PluginView {
	constructor(model, context) {
		super(model);

		this.oldErrors = [];
		this.context = context;
		const rules = this.splitRules(this.rules);

		if (validationService.hasRules(rules.regular, this.context.key)) {
			this.validator = validationService.createValidator(rules.regular, this.context.key);
		}
		if (rules.custom.length > 0) {
			this.customValidator = validationService.createCustomValidator(rules.custom, this.context.key);
		}
	}

	splitRules(rules) {
		const result = {
			custom: [],
			regular: []
		};
		rules.forEach(rule => {
			if (rule.hasOwnProperty('custom')) {
				const custom = {for: rule.for, key: rule.key, custom: rule.custom};
				result.custom.push(custom);
				const regular = Object.assign({}, rule);
				delete regular.custom;
				result.regular.push(regular);
			} else {
				result.regular.push(rule);
			}
		});

		return result;
	}

	get errors() {
		const target = {
			[this.context.key]: this.context.value
		};

		if (this.validator) {
			const isValid = this.validator.validate(target);
			if (!isValid) {
				const newError = this.validator.getErrors()[this.context.key];
				const newErrors = isString(newError) ? [newError] : newError;
				if (!isEqual(newErrors, this.oldErrors)) {
					this.oldErrors = newErrors;
				}
				/*eslint-disable  no-console, no-unused-vars, no-undef*/
			} else {
				this.oldErrors.length = 0;
			}
		}
		if (this.customValidator) {
			this.customValidator.validate(target);
		}
		return this.oldErrors;
	}

	get rules() {
		return this.model.validation().rules;
	}

}
