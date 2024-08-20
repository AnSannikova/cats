import { useEffect } from 'react';
import { useDispatch, useSelector } from './services/store';
import { getCatsSelector, getCatsThunk } from './services/cats-slice';
import { CardList } from './components';
import styles from './styles.module.css';

const App = () => {
	const dispatch = useDispatch();
	const cats = useSelector(getCatsSelector);

	useEffect(() => {
		dispatch(getCatsThunk());
	}, []);

	return (
		<div className={styles.content}>
			<main className={styles.main}>
				<CardList items={cats} />
			</main>
		</div>
	);
};

export default App;
