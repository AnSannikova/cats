import { FC } from 'react';
import { useSelector } from '../../services/store';
import { getCatsSelector } from '../../services/cats-slice';
import { CardList } from '../../components';

const MainPage: FC = () => {
	const cats = useSelector(getCatsSelector);

	return (
		<>
			<CardList items={cats} />
		</>
	);
};

export default MainPage;
