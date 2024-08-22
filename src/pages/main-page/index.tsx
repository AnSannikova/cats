import { FC } from 'react';
import { useSelector, useDispatch } from '../../services/store';
import {
	getCatsSelector,
	getLoadingSelector,
	getOnyLikedSelector,
	setOnlyLiked,
} from '../../services/cats-slice';
import { CardList, Loader, Toggle } from '../../components';
import styles from './styles.module.css';

const MainPage: FC = () => {
	const cats = useSelector(getCatsSelector);
	const isLoading = useSelector(getLoadingSelector);
	const isOnlyLiked = useSelector(getOnyLikedSelector);
	const dispatch = useDispatch();

	const onToggleClick = () => {
		dispatch(setOnlyLiked(!isOnlyLiked));
	};

	const items = isOnlyLiked
		? cats.filter((item) => item.isLike === true)
		: cats;

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>Random Cats</h1>
				<Toggle
					disabled={isLoading}
					isChecked={isOnlyLiked}
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
				!isLoading && (
					<h2 className={styles.subtitle}>You haven't put any likes yet</h2>
				)
			)}
		</>
	);
};

export default MainPage;
