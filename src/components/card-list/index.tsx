import { FC } from 'react';
import { TCardList } from './types';
import Card from '../card';
import styles from './styles.module.css';

const CardList: FC<TCardList> = ({ items }) => (
	<ul className={styles.list}>
		{items.map((item) => (
			<li key={item.id}>
				<Card
					id={item.id}
					imgSrc={item.url}
					name={item.breeds.name}
					description={item.breeds.description}
					isLike={item.isLike}
				/>
			</li>
		))}
	</ul>
);

export default CardList;
