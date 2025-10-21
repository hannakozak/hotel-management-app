export const Select = ({ options, value, onChange, ...props }) => {
	return (
		<select
			value={value}
			onChange={onChange}
			className="
						w-full appearance-none rounded-lg border border-gray-300
						bg-white px-3 py-2 text-sm text-gray-800 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200
						shadow-sm transition-all
						focus:border-blue-500 focus:outline-none
					"
			{...props}
		>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
