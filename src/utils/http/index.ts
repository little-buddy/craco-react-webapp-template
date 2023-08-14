import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { use } from './interceptors/index';
import { isDevelopment } from '@/utils';

interface HttpConfig extends AxiosRequestConfig {
	retry?: boolean;
	auths?: boolean;
}

// https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/guide.html#serve-command
// The electron build process is in development mode
const { REACT_APP_BUILD_BASE_URL, REACT_APP_CI_BASE_URL } = process.env;

const baseURL = isDevelopment
	? ''
	: REACT_APP_CI_BASE_URL || REACT_APP_BUILD_BASE_URL;

const http: AxiosInstance = Axios.create({
	withCredentials: true,
	baseURL,
	timeout: 30000,
});

use(http);

export function get<T>(
	url: string,
	params?: unknown,
	options?: HttpConfig
): Promise<T> {
	return http
		.get(url, {
			params,
			...options,
		})
		.catch(e => {
			console.error(e);
			return e;
		});
}

export function post<T>(
	url: string,
	data?: unknown,
	options?: HttpConfig
): Promise<T> {
	return http
		.post(url, {
			data,
			...options,
		})
		.catch(e => {
			console.error(e);
			return e;
		});
}

export default http;
