import Box from './box';

export default class Table {
	constructor(markup, template) {
		this.markup = markup;
		this.template = template;
	}

	get head() {
		const document = this.markup.document;
		const head = this.markup.head;
		if(document && head){
			return new Box(document, head, this.template);
		}
		return Box.empty;
	}

	get body() {
		const document = this.markup.document;
		const body = this.markup.body;
		if(document && body){
			return new Box(document, body, this.template);
		}
		return Box.empty;
	}

	get foot() {
		const document = this.markup.document;
		const foot = this.markup.foot;
		if(document && foot){
			return new Box(document, foot, this.template);
		}
		return Box.empty;
	}
}