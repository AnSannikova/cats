import { FC } from 'react';
import { TCard } from './types';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const Card: FC<TCard> = ({ id, name, imgSrc, description }) => {
	return (
		<Link to={`/cats/${id}`}>
			<article className={styles.card}>
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
			</article>
		</Link>
	);
};

export default Card;
