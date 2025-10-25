import { Navigation } from './Navigation.jsx';

export const Sidebar = () => {
	return (
		<aside className="sm:row-span-full flex flex-row sm:flex-col sm:justify-start items-center sm:shadow-md">
			<div className="sm:px-6 w-full sm:w-52">
				<img
					src="/logo.png"
					alt="Logo"
					className="w-full h-auto max-w-[160px] object-contain"
				/>
			</div>
			<Navigation />
		</aside>
	);
};
