import { TUrlOptions } from './types';
import { TCat } from '../types';

const config = {
	apiKey: import.meta.env.VITE_X_API_KEY,
	url: 'https://api.thecatapi.com/v1',
};

const requestOptions = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-API-KEY': config.apiKey,
	},
};

const urlOptions: TUrlOptions = {
	has_breeds: true,
	order: 'RANDOM',
	limit: 30,
};

const endpoint = (options: TUrlOptions) => {
	return Object.entries(options)
		.map((item) => {
			const [key, value] = item;
			return `&${key}=${value}`;
		})
		.join('');
};

const checkResponse = (res: Response) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
};

const request = async <T>(endpoint: string): Promise<T> => {
	return await fetch(`${config.url}${endpoint}`, requestOptions).then(
		checkResponse
	);
};

export const getCatsApi = () => {
	return request<TCat[]>(`/images/search?${endpoint(urlOptions)}`);
};
