type TBreed = {
	id: string;
	name: string;
	description: string;
	temperament: string;
	origin: string;
	life_span: string;
	wikipedia_url: string;
};

export type TCat = {
	id: string;
	url: string;
	breeds: TBreed[];
};
