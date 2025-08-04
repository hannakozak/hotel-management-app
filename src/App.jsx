import './App.css';
import { Header } from './ui/Header.jsx';
import { Sidebar } from './ui/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen px-5">
			<Header />
			<Sidebar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
