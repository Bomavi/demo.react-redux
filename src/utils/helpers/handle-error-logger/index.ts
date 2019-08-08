export const handleErrorLogger = Object.freeze({
	origin: console.error,
	turnOff() {
		console.error = () => {};
	},
	turnOn() {
		console.error = this.origin;
	},
});
