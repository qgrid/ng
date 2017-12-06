import {PluginView} from '../plugin.view';
import {isString, isEqual} from '@grid/core/utility';
import * as validationService from '@grid/core/validation/validation.service';

export class ValidatorView extends PluginView {
	constructor(model, context) {
		super(model);

		this.context = context;
		this.value = context.value;
		this.type = context.type;
		this.key = context.key;
		this.oldErrors = [];
		const rules = this.splitRules(this.rules);

		if (validationService.hasRules(rules.regular, this.key)) {
			this.validator = validationService.createValidator(rules.regular, this.key);
		}
		if (rules.custom.length > 0) {
			this.customValidator = validationService.createCustomValidator(rules.custom, this.key);
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
			[this.key]: this.context.value
		};
		const errors = [];

		if (this.validator) {
			const isValid = this.validator.validate(target);
			if (!isValid) {
				const newError = this.validator.getErrors()[this.key];
				const newErrors = isString(newError) ? [newError] : newError;
				errors.push(...newErrors);

			}
		}
		if (this.customValidator) {
			this.customValidator.validate(target)
				.then(res => {
					const isValid = !res.some(item => !item);
					if (!isValid) {
						const newErrors = ['Kate'];
						errors.push(...newErrors);
					}

				});
		}
		if (!isEqual(errors, this.oldErrors)) {
			this.oldErrors = errors;
		}
		return this.oldErrors;
	}

	get rules() {
		return this.model.validation().rules;
	}

}
