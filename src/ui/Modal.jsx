import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '../ui/useOutsideClick.js';

const ModalContext = createContext();

export const Modal = ({ children }) => {
	const [openName, setOpenName] = useState('');

	const close = () => setOpenName('');
	const open = setOpenName;

	return (
		<ModalContext.Provider value={{ openName, close, open }}>
			{children}
		</ModalContext.Provider>
	);
};
const Open = ({ children, opens: opensWindowName }) => {
	const { open } = useContext(ModalContext);
	return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
	const { openName, close } = useContext(ModalContext);
	const ref = useOutsideClick(close);

	if (name !== openName) return null;

	return createPortal(
		<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
			<div
				ref={ref}
				className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-xl transition-all"
			>
				{/* Close button */}
				<button
					onClick={close}
					className="absolute top-4 right-5 rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
				>
					<HiXMark className="h-6 w-6" />
				</button>

				<div>{cloneElement(children, { onCloseModal: close })}</div>
			</div>
		</div>,
		document.body
	);
};
Modal.Open = Open;
Modal.Window = Window;
