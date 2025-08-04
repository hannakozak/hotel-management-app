import { Navigation } from './Navigation.jsx';
export const Sidebar = () => {
	return (
		<aside className="row-span-full flex flex-col justify-start items-center  border-r border-primary-800">
			<div className="w-42">
				<img src="/The Amber Light.png" alt="Logo" />
			</div>

			<Navigation />
		</aside>
	);
};
