import { Filter } from '../../ui/Filter';

export const ApartmentTableOperations = () => {
	return (
		<div className="flex flex-wrap gap-2 items-center border border-gray-200 bg-white shadow-sm rounded-md p-2">
			<Filter
				filterField="discount"
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'no-discount', label: 'No discount' },
					{ value: 'with-discount', label: 'With discount' },
				]}
			/>
		</div>
	);
};
