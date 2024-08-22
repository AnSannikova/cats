import { FC, useState } from 'react';
import { useSelector } from '../../services/store';
import { getCatsSelector, getLoadingSelector } from '../../services/cats-slice';
import { CardList, Loader, Toggle } from '../../components';
import styles from './styles.module.css';

const MainPage: FC = () => {
	const cats = useSelector(getCatsSelector);
	const isLoading = useSelector(getLoadingSelector);
	const [isToggleChecked, setIsToggleChecked] = useState(false);

	const onToggleClick = () => {
		setIsToggleChecked(!isToggleChecked);
	};

	const items = isToggleChecked
		? cats.filter((item) => item.isLike === true)
		: cats;

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Random Cats</h1>
				<Toggle
					disabled={isLoading}
					isChecked={isToggleChecked}
					onClick={onToggleClick}
				/>
			</div>
			{isLoading && (
				<div className={styles.loadingWrapper}>
					<Loader />
				</div>
			)}
			{items.length > 0 ? (
				<CardList items={items} />
			) : (
				<h2 className={styles.subtitle}>You haven't put any likes yet</h2>
			)}
		</>
	);
};

export default MainPage;
