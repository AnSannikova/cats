import { FC } from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { getCatsSelector } from '../../services/cats-slice';
import { BackButton, WikiLink } from '../../components';
import styles from './styles.module.css';

const InfoCatPage: FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const cat = useSelector(getCatsSelector).find((item) => item.id === id);
	const breed = cat?.breeds;

	const onButtonClick = () => {
		navigate(-1);
	};

	if (!cat) return <Navigate replace to="/cats" />;

	return (
		<div className={styles.page}>
			<BackButton onClick={onButtonClick} />
			<section className={styles.content}>
				<img
					className={styles.image}
					src={cat?.url}
					alt={`${breed?.name} cat breed`}
				/>
				<div className={styles.textWrapper}>
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
					{breed && <WikiLink url={breed.wikipedia_url} />}
				</div>
			</section>
		</div>
	);
};

export default InfoCatPage;
