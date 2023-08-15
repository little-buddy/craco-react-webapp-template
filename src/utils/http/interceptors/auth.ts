import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export default (http: AxiosInstance) => {
	http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		console.log('Auth request');
		/*  */
		return config;
	});
	http.interceptors.response.use(response => {
		console.log('Auth response');
		return response;
	});
};
