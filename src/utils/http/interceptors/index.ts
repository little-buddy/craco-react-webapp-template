import { AxiosInstance } from 'axios';
// import auth from './auth';
import format from './format';
// import timeout from './timeout';
import logger from './logger';

export const use = (http: AxiosInstance) => {
	// auth(http);
	logger(http);
	format(http);
	// timeout(http);
};
