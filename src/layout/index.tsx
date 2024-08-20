import { FC } from 'react';
import styles from './styles.module.css';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
	<div className={styles.content}>
		<main className={styles.main}>
			<Outlet />
		</main>
	</div>
);

export default Layout;
