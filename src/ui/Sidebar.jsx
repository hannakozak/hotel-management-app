import { Navigation } from './Navigation.jsx';

export const Sidebar = () => {
	return (
		<aside className="row-span-full flex flex-col justify-start items-center bg-white shadow-md">
			<div className="w-42 p-6">
				<img
					src="/The Amber Light.png"
					alt="Logo"
					className="w-full h-auto max-w-[160px] object-contain"
				/>
			</div>

			<Navigation />
		</aside>
	);
};
