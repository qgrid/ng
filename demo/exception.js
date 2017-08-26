/*eslint-disable  no-debugger, no-unused-vars, no-undef*/

Handler.$inject = ['$log', '$injector'];

export default function Handler($log, $injector) {

	let toast = null;

	function getToast() {
		if (!toast) {
			toast = $injector.get('$mdToast');
		}

		return toast;
	}

	return (exception, cause = 'qgrid') => {
		$log.error(exception, cause);
		if (!ENV.PRODUCTION) {
			debugger;
		}

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
/*eslint-disable  no-debugger, no-unused-vars, no-undef*/
