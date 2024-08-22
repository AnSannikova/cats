import { FC } from 'react';
import styles from '../styles.module.css';
import { TRemoveButton } from './types';

const RemoveButton: FC<TRemoveButton> = ({ onClick }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<svg
				className={styles.svg}
				width="23"
				height="26"
				viewBox="0 0 18 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.45781 18.1422C2.51876 18.8126 3.06729 19.3002 3.73772 19.3002H14.2614C14.9318 19.3002 15.4804 18.7923 15.5413 18.1422L16.7197 5.79004H1.27948L2.45781 18.1422Z"
					fill="#292f36"
				/>
				<path
					d="M16.7201 1.93002H11.5801V1.27991C11.5801 0.568849 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.568849 6.44018 1.27991V1.93002H1.27991C0.568849 1.93002 0 2.49887 0 3.20993C0 3.92099 0.568849 4.48984 1.27991 4.48984H16.7201C17.4312 4.48984 18 3.92099 18 3.20993C18 2.49887 17.4312 1.93002 16.7201 1.93002Z"
					fill="#292f36"
				/>
			</svg>
		</button>
	);
};
export default RemoveButton;
