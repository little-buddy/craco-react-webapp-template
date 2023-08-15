import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export default (http: AxiosInstance) => {
	http.interceptors.request.use(
		(config: InternalAxiosRequestConfig) =>
			/*  */
			config
	);
	http.interceptors.response.use(
		response =>
			/*  */
			response
	);
};
