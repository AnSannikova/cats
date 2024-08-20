import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { getCatsSelector } from '../../services/cats-slice';
import styles from './styles.module.css';

const InfoCatPage: FC = () => {
	const { id } = useParams();
	const cat = useSelector(getCatsSelector).find((item) => item.id === id);
	const breed = cat?.breeds[0];
	const navigate = useNavigate();

	const onButtonClick = () => {
		navigate('/cats/');
	};

	return (
		<div>
			<img
				className={styles.image}
				src={cat?.url}
				alt={`${breed?.name} cat breed`}
			/>
			<div>
				<button onClick={onButtonClick}>Вернуться назад</button>
				<h1>{breed?.name}</h1>
				<p>Temperament: {breed?.temperament}</p>
				<p>Country of origin: {breed?.origin}</p>
				<p>Life expectancy: {breed?.life_span} years</p>
				<p>{breed?.description}</p>
			</div>
		</div>
	);
};

export default InfoCatPage;
