import {PluginView} from '../plugin.view';
import {isString} from '@grid/core/utility';
import {Event} from '@grid/core/infrastructure';
import * as validationService from '@grid/core/validation/validation.service';

export class ValidatorView extends PluginView {
	constructor(model, context) {
		super(model);

		this.context = context;
		this.value = context.value;
		this.type = context.type;
		this.key = context.key;
		this.errors = [];
		this.valueChanged = new Event();
		this.valueChanged.on(this.validate.bind(this));
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

	validate() {
		this.errors.length = 0;
		const target = {
			[this.key]: this.context.value
		};

		if (this.validator) {
			const isValid = this.validator.validate(target);
			if (!isValid) {
				const newError = this.validator.getErrors()[this.key];
				const newErrors = isString(newError) ? [newError] : newError;
				this.errors.push(...newErrors);

			}
		}
		if (this.customValidator) {
			this.customValidator.validate(target)
				.then(res => {
					const errors = res.filter(item => !item.invalid);
					if (errors.length) {
						const error = errors[0].message;
						this.errors.push(error);
					}
				});
		}
	}

	get rules() {
		return this.model.validation().rules;
	}
}
