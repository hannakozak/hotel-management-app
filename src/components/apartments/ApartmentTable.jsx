import { ApartmentRow } from './ApartmentRow';
import { useApartments } from './useApartments';
import { Table } from '../../ui/Table';

export const ApartmentTable = () => {
	const { isLoading, apartments } = useApartments();

	if (isLoading) return <div>Loading</div>;

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
				data={apartments}
				render={(apartment) => (
					<ApartmentRow apartment={apartment} key={apartment.id} />
				)}
			/>
			<Table.Footer>
				{' '}
				<div className="pr-3">Total</div> <div> {apartments.length}</div>
			</Table.Footer>
		</Table>
	);
};
