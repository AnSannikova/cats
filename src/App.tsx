import {
	createBrowserRouter,
	RouterProvider,
	ScrollRestoration,
} from 'react-router-dom';
import Layout from './layout';
import { FC, useEffect } from 'react';
import { useDispatch } from './services/store';
import { getCatsThunk } from './services/cats-slice';

const router = createBrowserRouter([
	{
		element: (
			<>
				<ScrollRestoration
					getKey={(location) => {
						const paths = '/cats/';
						return paths === location.pathname
							? location.pathname
							: location.key;
					}}
				/>
				<Layout />
			</>
		),
		children: [
			{
				path: '/cats/',
				children: [
					{
						index: true,
						lazy: async () => {
							const { MainPage } = await import('./pages');
							return { Component: MainPage };
						},
					},
					{
						path: ':id',
						lazy: async () => {
							const { InfoCatPage } = await import('./pages');
							return { Component: InfoCatPage };
						},
					},
				],
			},
		],
	},
]);

const App: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCatsThunk());
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
