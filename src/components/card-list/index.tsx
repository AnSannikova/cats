import { FC } from 'react';
import { TCardList } from './types';
import Card from '../card';
import styles from './styles.module.css';

const CardList: FC<TCardList> = ({ items }) => (
	<ul className={styles.list}>
		{items.map((item) => (
			<li key={item.id}>
				<Card
					imgSrc={item.url}
					name={item.breeds[0].name}
					description={item.breeds[0].description}
				/>
			</li>
		))}
	</ul>
);

export default CardList;
