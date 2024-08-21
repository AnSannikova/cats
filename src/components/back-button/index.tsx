import { FC } from 'react';
import { TBackButton } from './types';
import arrow from '../../assets/arrow-back.svg';
import styles from './styles.module.css';

const BackButton: FC<TBackButton> = ({ onClick }) => (
	<button className={styles.button} onClick={onClick}>
		Home{' '}
		<span>
			<img className={styles.arrow} src={arrow} alt="Back arrow" />
		</span>
	</button>
);

export default BackButton;
