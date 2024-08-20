import { FC } from 'react';
import { TCard } from './types';
import styles from './styles.module.css';

const Card: FC<TCard> = ({ name, imgSrc, description }) => {
	return (
		<article className={styles.card}>
			<div className={styles.imageWrapper}>
				<img className={styles.image} src={imgSrc} alt={`${name} cat breed`} />
			</div>
			<h2 className={styles.title}>{name}</h2>
			<div className={styles.text}>
				<p>{description}</p>
			</div>
		</article>
	);
};

export default Card;
