import { NavLink } from 'react-router';
import {
	HiHome,
	HiCalendarDays,
	HiCog6Tooth,
	HiHomeModern,
	HiUsers,
} from 'react-icons/hi2';

export const Navigation = () => {
	// Define nav items with proper typing
	const navItems = [
		{ name: 'Home', icon: HiHome, path: '/dashboard' },
		{ name: 'Bookings', icon: HiCalendarDays, path: '/bookings' },
		{ name: 'Apartments', icon: HiHomeModern, path: '/apartments' },
		{ name: 'Users', icon: HiUsers, path: '/users' },
		{ name: 'Settings', icon: HiCog6Tooth, path: '/settings' },
	];

	return (
		<nav className="w-full text-lg text-gray-600">
			<ul className="flex flex-col p-4">
				{navItems.map((item) => (
					<li key={item.path}>
						<NavLink
							to={item.path}
							className="flex w-full items-center text-primary-200 hover:text-accent-400 transition-colors"
						>
							<div className="flex justify-center items-center">
								<item.icon className="w-6 h-6 my-3" />
							</div>

							<div className="pl-2 hidden md:block font-semibold">
								{item.name}
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
