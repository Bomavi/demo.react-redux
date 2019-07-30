export const debounceTiming = {
	input: 500,
	button: 1000,
};

export const debounce = (func: Function, wait: number, immediate?: boolean) => {
	let timeout: ReturnType<typeof setTimeout> | null;

	return function() {
		const args = arguments;
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};
		const callNow = immediate && !timeout;

		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(this, args);
	};
};
