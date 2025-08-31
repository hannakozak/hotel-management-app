import './App.css';
import { Header } from './ui/Header.jsx';
import { Sidebar } from './ui/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen px-5">
			<Header />
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
