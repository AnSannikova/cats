import { TBreed } from '../types';

export type TUrlOptions = {
	has_breeds: boolean;
	order: 'RANDOM' | 'ASC' | 'DESC';
	limit: number;
};

export type TCatResponse = {
	id: string;
	url: string;
	breeds: TBreed[];
};
