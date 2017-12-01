import {PluginView} from '../plugin.view';
import {isString, isEqual} from '@grid/core/utility';
import * as validationService from '@grid/core/validation/validation.service';

export class ValidatorView extends PluginView {
	constructor(model, context) {
		super(model);

		this.oldErrors = [];
		this.context = context;
		if (validationService.hasRules(this.rules.regular, this.context.key)) {
			this.validator = validationService.createValidator(this.rules.regular, this.context.key);
		}
		if (this.rules.custom.length > 0) {
			this.customValidator = validationService.createCustomValidator(this.rules.custom, this.context.key);
		}
	}

	get errors() {
		if (this.validator) {
			const target = {
				[this.context.key]: this.context.value
			};

			const isValid = this.validator.validate(target);
			if (!isValid) {
				const newError = this.validator.getErrors()[this.context.key];
				const newErrors = isString(newError) ? [newError] : newError;
				if (!isEqual(newErrors, this.oldErrors)) {
					this.oldErrors = newErrors;
				}
			} else {
				this.oldErrors.length = 0;
			}
		}
		// if (this.customValidator) {
		//
		// }
		return this.oldErrors;
	}

	get rules() {
		const rules = this.model.validation().rules;
		const result = rules.reduce((memo, rule) => {
			if (rule.hasOwnProperty('custom')) {
				const custom = {for: rule.for, key: rule.key, custom: rule.custom};
				memo.custom.push(custom);
				delete rule.custom;
			}
			memo.regular.push(rule);
			return memo;
		}, {custom: [], regular: []});

		return result;
	}

}
