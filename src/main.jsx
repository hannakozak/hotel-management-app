import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Bookings } from './pages/Bookings.jsx';
import { Account } from './pages/Account.jsx';
import { Rooms } from './pages/Rooms.jsx';
import { Login } from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Settings } from './pages/Settings.jsx';
import { Users } from './pages/Users.jsx';
import { PageNotFound } from './pages/PageNotFound.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route index element={<Navigate replace to="dashboard" />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="bookings" element={<Bookings />} />
					<Route path="rooms" element={<Rooms />} />
					<Route path="users" element={<Users />} />
					<Route path="settings" element={<Settings />} />
					<Route path="account" element={<Account />} />
				</Route>

				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
