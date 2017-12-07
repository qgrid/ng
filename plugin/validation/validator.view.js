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

		if (validationService.hasRules(this.regularRules, this.key)) {
			this.validator = validationService.createValidator(this.regularRules, this.key);
		}
		if (this.customRules.length > 0) {
			this.customValidator = validationService.createCustomValidator(this.customRules, this.key);
		}
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

	get customRules() {
		return this.model.validation().customRules;
	}

	get regularRules() {
		return this.model.validation().regularRules;
	}
}
