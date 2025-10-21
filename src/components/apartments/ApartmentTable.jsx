import { ApartmentRow } from './ApartmentRow';
import { useApartments } from './useApartments';
import { Table } from '../../ui/Table';
import { useSearchParams } from 'react-router-dom';

export const ApartmentTable = () => {
	const { isLoading, apartments } = useApartments();
	const [searchParams] = useSearchParams();

	if (isLoading) return <div>Loading</div>;

	const filterValue = searchParams.get('discount') || 'all';

	let filteredApartments;
	if (filterValue === 'all') filteredApartments = apartments;
	if (filterValue === 'no-discount')
		filteredApartments = apartments.filter(
			(apartment) => apartment.discount === 0
		);
	if (filterValue === 'with-discount')
		filteredApartments = apartments.filter(
			(apartment) => apartment.discount > 0
		);

	const sortBy = searchParams.get('sortBy') || 'startDate-asc';
	const [field, direction] = sortBy.split('-');
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedApartments = filteredApartments.sort(
		(a, b) => (a[field] - b[field]) * modifier
	);

	return (
		<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
			<Table.Header>
				<div></div>
				<div>Apartment</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div></div>
			</Table.Header>
			<Table.Body
				data={sortedApartments}
				render={(apartment) => (
					<ApartmentRow apartment={apartment} key={apartment.id} />
				)}
			/>
			<Table.Footer>
				<div className="pr-3">Total</div> <div> {apartments.length}</div>
			</Table.Footer>
		</Table>
	);
};
