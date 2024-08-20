type TBreed = {
	id: string;
	name: string;
	description: string;
	temperament: string;
	origin: string;
	lifeSpan: string;
	wikipediaUrl: string;
	vetStreetUrl: string;
};

export type TCat = {
	id: string;
	url: string;
	breeds: TBreed[];
};
