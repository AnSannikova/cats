import { FC } from 'react';
import styles from './styles.module.css';
import { TToggle } from './types';

const Toggle: FC<TToggle> = ({ disabled, isChecked, onClick }) => (
	<div className={styles.toggle}>
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${styles.toggleButton} ${
				isChecked ? styles.checked : styles.notChecked
			}`}
		></button>
		<span>Only liked</span>
	</div>
);

export default Toggle;
