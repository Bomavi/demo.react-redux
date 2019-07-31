/* local imports: common */
import { axios } from './axios';

export class ApiClient {
	private readonly prefix: string;

	public constructor({ apiPrefix }: { apiPrefix: string }) {
		if (!apiPrefix) {
			throw Error('[apiPrefix] required');
		}

		this.prefix = apiPrefix;
	}

	public get<E = {}>(url: string, params?: {}, options?: {}): Promise<E> {
		return this.request({
			url,
			params,
			options,
			method: 'get',
		}) as Promise<E>;
	}

	public put<E = {}>(
		url: string,
		body: {} = {},
		params?: {},
		options?: {}
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'put',
		}) as Promise<E>;
	}

	public patch<E = {}>(
		url: string,
		body: {} = {},
		params?: {},
		options?: {}
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'patch',
		}) as Promise<E>;
	}

	public post<E = {}>(
		url: string,
		body: {} = {},
		params?: {},
		options?: {}
	): Promise<E> {
		return this.request({
			url,
			body,
			params,
			options,
			method: 'post',
		}) as Promise<E>;
	}

	public delete<E = {}>(url: string, params?: {}): Promise<E> {
		return this.request({
			url,
			params,
			method: 'delete',
		}) as Promise<E>;
	}

	private async request({
		url,
		method,
		body,
		params,
		options,
	}: {
		url: string;
		method: 'delete' | 'get' | 'patch' | 'post' | 'put';
		body?: {};
		params?: {};
		options?: {};
	}): Promise<{}> {
		try {
			const response = await axios({
				method,
				url,
				params,
				baseURL: this.prefix,
				data: body,
				...options,
			});
			return response.data;
		} catch (e) {
			const response = e.response;
			if (!response) {
				console.error(e);
				throw Error(e);
			}
			if (response.status >= 400) {
				const serverError = e as CustomServerError;
				serverError.res = response;
				throw serverError;
			}
			return e;
		}
	}
}
