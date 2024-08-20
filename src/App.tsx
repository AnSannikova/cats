import { useEffect, useState } from 'react';
import { getCats } from './services/cat-api';
import { Image } from '@thatapicompany/thecatapi/dist/types';

const App = () => {
	const [cats, setCats] = useState<null | Image[]>(null);

	useEffect(() => {
		getCats()
			.then((catsItem) => setCats(catsItem))
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<ul>
				{cats?.map((item) => (
					<li key={item.id}>{item.url}</li>
				))}
			</ul>
		</>
	);
};

export default App;
