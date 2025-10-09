import React, { createContext, useContext } from 'react';

const TableContext = createContext();

export const Table = ({ columns, children }) => {
	return (
		<TableContext.Provider value={{ columns }}>
			<div
				role="table"
				className="border border-gray-200 text-sm bg-white rounded-lg overflow-hidden"
			>
				{children}
			</div>
		</TableContext.Provider>
	);
};

export const Header = ({ children }) => {
	const { columns } = useContext(TableContext);
	return (
		<header
			role="row"
			className={`grid items-center gap-x-6 px-6 py-4 bg-gray-50 border-b border-gray-100 uppercase tracking-wide font-semibold text-gray-600`}
			style={{ gridTemplateColumns: columns }}
		>
			{children}
		</header>
	);
};

export const Row = ({ children }) => {
	const { columns } = useContext(TableContext);
	return (
		<div
			role="row"
			className={`grid items-center gap-x-6 px-6 py-3 border-b last:border-0 border-gray-100`}
			style={{ gridTemplateColumns: columns }}
		>
			{children}
		</div>
	);
};

export const Body = ({ data, render }) => {
	if (!data?.length)
		return (
			<p className="text-center text-base font-medium text-gray-700 my-6">
				No data to show at the moment
			</p>
		);

	return <section className="my-1">{data.map(render)}</section>;
};

export const Footer = ({ children }) => {
	if (!children) return null;

	return (
		<footer className="bg-gray-50 flex justify-center p-3">{children}</footer>
	);
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
