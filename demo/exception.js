Handler.$inject = ['$log', '$injector'];

export default function Handler($log, $injector) {

	let toast = null;

	function getToast() {
		if (!toast) {
			toast = $injector.get('$mdToast');
		}

		return toast;
	}

	return (exception, cause) => {
		$log.error(exception, cause);

		const toast = getToast();
		toast.show(
			toast.simple()
				.textContent(`${cause}: ${exception}`)
				.position('right')
				.toastClass('error')
				.hideDelay(10000)
		);
	};
}
