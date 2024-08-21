import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { getCatsSelector } from '../../services/cats-slice';
import { BackButton } from '../../components';
import styles from './styles.module.css';

const InfoCatPage: FC = () => {
	const { id } = useParams();
	const cat = useSelector(getCatsSelector).find((item) => item.id === id);
	const breed = cat?.breeds;
	const navigate = useNavigate();

	const onButtonClick = () => {
		navigate(-1);
	};

	return (
		<div className={styles.page}>
			<img
				className={styles.image}
				src={cat?.url}
				alt={`${breed?.name} cat breed`}
			/>
			<div className={styles.textWrapper}>
				<BackButton onClick={onButtonClick} />
				<h1 className={styles.title}>{breed?.name}</h1>
				<p>
					<span className={styles.accent}>Temperament:</span>{' '}
					{breed?.temperament}
				</p>
				<p>
					<span className={styles.accent}>Country of origin:</span>{' '}
					{breed?.origin}
				</p>
				<p>
					<span className={styles.accent}>Life expectancy:</span>{' '}
					{breed?.life_span} years
				</p>
				<p>{breed?.description}</p>
			</div>
		</div>
	);
};

export default InfoCatPage;
