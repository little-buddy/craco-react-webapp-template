import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export default (http: AxiosInstance) => {
	http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
		console.log(config);
		return config;
		/*  */
	});
	http.interceptors.response.use(response => {
		console.log(response);
		return response;
		/*  */
	});
};
