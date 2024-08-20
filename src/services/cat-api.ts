import { TheCatAPI } from '@thatapicompany/thecatapi';
import { Image } from '@thatapicompany/thecatapi/dist/types';

const ApiKey = import.meta.env.VITE_X_API_KEY;
const theCatAPI = new TheCatAPI(ApiKey);

// const theCatAPI = new TheCatAPI(ApiKey, {
//   host: "https://api.thedogapi.com/v1",
// })

export const getCats = async (): Promise<Image[]> => {
	const images: Image[] = await theCatAPI.images.searchImages({
		limit: 20,
		hasBreeds: true,
	});
	return images;
};
