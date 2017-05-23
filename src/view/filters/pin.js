export default function pin(columns, pin) {
	return columns.filter(c => c.model.pin === pin);
}