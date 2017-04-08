export function isImage(name) {
	return !!name && name.search(/png|jpg|jpeg|svg/) > -1;
}
