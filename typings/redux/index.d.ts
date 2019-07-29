declare interface TAction<T = string> {
	type: string;
	payload?: T;
	error?: boolean;
}
