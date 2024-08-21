import { FC } from 'react';
import { useSelector } from '../../services/store';
import { getCatsSelector } from '../../services/cats-slice';
import { CardList } from '../../components';
import styles from './styles.module.css';

const MainPage: FC = () => {
	const cats = useSelector(getCatsSelector);

	return (
		<>
			<h1 className={styles.title}>Random Cats</h1>
			<CardList items={cats} />
		</>
	);
};

export default MainPage;
