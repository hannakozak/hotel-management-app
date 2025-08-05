import { NavLink } from 'react-router';
import {
	HiHome,
	HiCalendarDays,
	HiCog6Tooth,
	HiHomeModern,
	HiUsers,
} from 'react-icons/hi2';

export const Navigation = () => {
	return (
		<nav className="z-10 text-xl">
			<ul className="flex flex-col gap-10 p-4">
				<li>
					<NavLink
						to="/dashboard"
						className="hover:text-accent-400 transition-colors flex items-center gap-4 font-semibold text-primary-200"
					>
						<HiHome />
						<span>Home</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/bookings"
						className="hover:text-accent-400 transition-colors flex items-center gap-4 font-semibold text-primary-200"
					>
						<HiCalendarDays />
						<span>Bookings</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/apartments"
						className="hover:text-accent-400 transition-colors flex items-center gap-4 font-semibold text-primary-200"
					>
						<HiHomeModern />
						<span>Apartments</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/users"
						className="hover:text-accent-400 transition-colors flex items-center gap-4 font-semibold text-primary-200"
					>
						<HiUsers />
						<span>Users</span>
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/settings"
						className="hover:text-accent-400 transition-colors flex items-center gap-4 font-semibold text-primary-200"
					>
						<HiCog6Tooth />
						<span>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
