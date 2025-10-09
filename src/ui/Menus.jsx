import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from './useOutsideClick';

const MenusContext = createContext();

export const Menus = ({ children }) => {
	const [openId, setOpenId] = useState('');
	const [position, setPosition] = useState(null);

	const close = () => setOpenId('');
	const open = setOpenId;

	return (
		<MenusContext.Provider
			value={{ openId, close, open, position, setPosition }}
		>
			{children}
		</MenusContext.Provider>
	);
};

export const Menu = ({ children }) => {
	return (
		<div className="flex items-center justify-end relative">{children}</div>
	);
};

export const Toggle = ({ id }) => {
	const { openId, close, open, setPosition } = useContext(MenusContext);

	function handleClick(e) {
		const rect = e.target.closest('button').getBoundingClientRect();
		setPosition({
			x: window.innerWidth - rect.width - rect.x,
			y: rect.y + rect.height + 8,
		});

		openId === '' || openId !== id ? open(id) : close();
	}

	return (
		<button
			onClick={handleClick}
			className="bg-transparent border-none p-1 rounded-sm translate-x-2 transition-all hover:bg-gray-100"
		>
			<HiEllipsisVertical className="w-6 h-6 text-gray-700" />
		</button>
	);
};

export const List = ({ id, children }) => {
	const { openId, position, close } = useContext(MenusContext);
	const ref = useOutsideClick(close);

	if (openId !== id) return null;

	return createPortal(
		<ul
			ref={ref}
			className="fixed bg-white shadow-md rounded-md z-50 overflow-hidden border border-gray-100"
			style={{
				right: `${position?.x}px`,
				top: `${position?.y}px`,
			}}
		>
			{children}
		</ul>,
		document.body
	);
};

export const Button = ({ children, icon, onClick }) => {
	const { close } = useContext(MenusContext);

	function handleClick() {
		onClick?.();
		close();
	}

	return (
		<li>
			<button
				onClick={handleClick}
				className="w-full text-left bg-transparent border-none px-6 py-3 text-sm flex items-center gap-4 transition-all hover:bg-gray-50"
			>
				{icon && <span className="text-gray-400">{icon}</span>}
				<span>{children}</span>
			</button>
		</li>
	);
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
