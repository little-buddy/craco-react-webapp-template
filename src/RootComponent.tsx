import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ROUTES } from './resources/routes-constants';
import Chat from '@/pages/Chat';
// import './styles/main.sass'

const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

const RootComponent: React.FC = () => (
	<Router>
		<Routes>
			<Route
				path="/404"
				element={
					<Suspense>
						<NotFoundPage />
					</Suspense>
				}
			/>
			<Route path="/chat" element={<Chat />} />
			<Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
		</Routes>
	</Router>
);

export default RootComponent;
