import { FC } from 'react';
import { TCard } from './types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import LikeButton from '../svg-buttons/like-button';
import { useDispatch } from '../../services/store';
import { likeItem, removeItem } from '../../services/cats-slice';
import RemoveButton from '../svg-buttons/remove-button';

const Card: FC<TCard> = ({ id, name, imgSrc, description, isLike }) => {
	const dispatch = useDispatch();

	const onLikeButtonClick = () => {
		dispatch(likeItem({ id, isLike }));
	};

	const onRemoveButtonClick = () => {
		dispatch(removeItem(id));
	};

	return (
		<article className={styles.card}>
			<Link to={`/cats/${id}`}>
				<div className={styles.content}>
					<div className={styles.imageWrapper}>
						<img
							className={styles.image}
							src={imgSrc}
							alt={`${name} cat breed`}
						/>
					</div>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.text}>
						<p>{description}</p>
					</div>
				</div>
			</Link>
			<div className={styles.footer}>
				<LikeButton onClick={onLikeButtonClick} isLike={isLike} />
				<RemoveButton onClick={onRemoveButtonClick} />
			</div>
		</article>
	);
};

export default Card;
