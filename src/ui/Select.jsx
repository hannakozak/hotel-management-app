export const Select = ({ options, value, onChange, ...props }) => {
	return (
		<select
			value={value}
			onChange={onChange}
			className="w-36 appearance-none rounded-md border border-gray-200 bg-white p-1 smp-2 text-xs text-gray-800 dark:text-gray-200 transition-all focus:border-teal-600 focus:outline-none"
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
