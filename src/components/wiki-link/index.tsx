import { FC } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow-right.svg';
import styles from './styles.module.css';

const WikiLink: FC<{ url: string }> = ({ url }) => (
	<Link className={styles.link} to={url} target="_blank">
		Open on Wikipedia
		<img className={styles.image} src={arrow} alt="Right arrow" />
	</Link>
);

export default WikiLink;
