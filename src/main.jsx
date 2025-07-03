import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Bookings } from './pages/Bookings.jsx';
import { Account } from './pages/Account.jsx';
import { Rooms } from './pages/Rooms.jsx';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Settings } from './pages/Settings.jsx';
import { Users } from './pages/Users.jsx';
import { PageNotFound } from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{ path: '/bookings', element: <Bookings /> },
	{ path: '/account', element: <Account /> },
	{ path: '/rooms', element: <Rooms /> },
	{ path: '/login', element: <Login /> },
	{ path: '/dashboard', element: <Dashboard /> },
	{ path: '/settings', element: <Settings /> },
	{ path: '/users', element: <Users /> },
	{ path: '*', element: <PageNotFound /> },
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
