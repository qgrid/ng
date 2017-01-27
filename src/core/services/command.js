export default class Command {
	constructor(shortcut = '', execute = () => true, canExecute = () => true) {
		this.shortcut = shortcut;
		this.execute = execute;
		this.canExecute = canExecute;
	}
}