export const Tag = ({ type = 'gray', children }) => {
	const baseClasses =
		'inline-block px-3 py-1 text-sm font-medium rounded-full capitalize';

	const colorClasses = {
		blue: 'bg-blue-100 text-blue-800',
		green: 'bg-green-100 text-green-800',
		gray: 'bg-gray-100 text-gray-800',
		red: 'bg-red-100 text-red-800',
		yellow: 'bg-yellow-100 text-yellow-800',
	};

	const appliedClasses = colorClasses[type] || colorClasses.gray;

	return <span className={`${baseClasses} ${appliedClasses}`}>{children}</span>;
};
