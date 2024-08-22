import { FC } from 'react';
import styles from '../styles.module.css';
import { TLikeButton } from './types';

const LikeButton: FC<TLikeButton> = ({ onClick, isLike }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<svg
				className={styles.svg}
				width="29"
				height="26"
				viewBox="0 0 21 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M19.154 9.33822C21.294 7.19833 21.294 3.72364 19.154 1.60492C17.014 -0.534975 13.5392 -0.534975 11.3992 1.60492L10.361 2.66428L9.32276 1.62611C7.18277 -0.534975 3.70792 -0.534975 1.58911 1.60492C0.550891 2.64309 0 4.02026 0 5.48217C0 6.94408 0.572079 8.32124 1.58911 9.35941L10.361 18.1309L19.154 9.33822ZM1.35604 5.48217C1.35604 4.38044 1.7798 3.36346 2.56376 2.60072C3.36891 1.79561 4.40712 1.39305 5.44534 1.39305C6.48356 1.39305 7.52178 1.79561 8.32692 2.60072L10.361 4.6135L12.395 2.57953C13.9841 0.990498 16.5903 0.990498 18.1582 2.57953C18.921 3.34227 19.3659 4.35925 19.3659 5.46098C19.3659 6.56271 18.9422 7.57969 18.1582 8.34243L10.361 16.1605L2.56376 8.36362C1.80099 7.57969 1.35604 6.56271 1.35604 5.48217Z"
					fill="#292f36"
				/>
				<path
					d="M19.154 9.33822C21.294 7.19832 21.294 3.72364 19.154 1.60492C17.014 -0.534975 13.5392 -0.534975 11.3992 1.60492L10.361 2.66428L9.32276 1.62611C7.18277 -0.534975 3.70792 -0.534975 1.58911 1.60492C0.550891 2.64309 0 4.02026 0 5.48217C0 6.94408 0.572079 8.32124 1.58911 9.35941L10.361 18.1309L19.154 9.33822Z"
					fill={isLike ? '#292f36' : 'transparent'}
				/>
			</svg>
		</button>
	);
};
export default LikeButton;
