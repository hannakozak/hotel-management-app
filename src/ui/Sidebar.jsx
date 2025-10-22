import { Navigation } from './Navigation.jsx';

export const Sidebar = () => {
	return (
		<aside className="row-span-full flex flex-col justify-start items-center bg-white shadow-md">
			<div className="w-52">
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
