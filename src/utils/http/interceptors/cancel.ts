import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default (http: AxiosInstance) => {
	http.interceptors.request.use((config: AxiosRequestConfig) => {
		/*  */
	});
	http.interceptors.response.use(response => {
		/*  */
	});
};
