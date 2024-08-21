import { FC, useState } from 'react';
import styles from './styles.module.css';

const Toggle: FC = () => {
	const [isChecked, setIsChecked] = useState(false);
	const onClick = () => {
		setIsChecked(!isChecked);
	};
	return (
		<div
			onClick={onClick}
			className={`${styles.toggle} ${
				isChecked ? styles.checked : styles.notChecked
			}`}
		>
			<span>Only liked</span>
		</div>
	);
};

export default Toggle;
