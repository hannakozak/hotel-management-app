import { useSearchParams } from 'react-router-dom';

export const Filter = ({ filterField, options }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentFilter = searchParams.get(filterField) || options.at(0).value;

	function handleClick(value) {
		searchParams.set(filterField, value);
		if (searchParams.get('page')) searchParams.set('page', 1);
		setSearchParams(searchParams);
	}

	return (
		<div className="flex gap-1 border border-gray-200 bg-white rounded-md p-1">
			{options.map((option) => {
				const isActive = option.value === currentFilter;
				return (
					<button
						key={option.value}
						onClick={() => handleClick(option.value)}
						disabled={isActive}
						className={`font-small text-xs px-3 sm:py-1 transition-all
              ${
								isActive
									? 'bg-teal-600 text-white cursor-default'
									: 'bg-white text-gray-700 hover:bg-teal-600 hover:text-white'
							}`}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	);
};
