import { BookingRow } from './BookingRow';
import { useBookings } from './useBookings';
import { Table } from '../../ui/Table';

export const BookingTable = () => {
	const { bookings, isLoading } = useBookings();

	if (isLoading)
		return <div className="flex justify-center py-10">loading...</div>;

	if (!bookings.length)
		return (
			<div className="text-center text-gray-500 py-10">No bookings found.</div>
		);

	return (
		<Table columns="1fr 1fr 2fr 1fr 1fr 1fr" className="px-2">
			<Table.Header>
				<div>Cabin</div>
				<div>Guest</div>
				<div>Dates</div>
				<div>Status</div>
				<div>Amount</div>
				<div className="text-right">Actions</div>
			</Table.Header>
			<Table.Body
				data={bookings}
				render={(booking) => <BookingRow booking={booking} key={booking.id} />}
			/>
			<Table.Footer>
				<div className="pr-3">Total</div> <div> {bookings.length}</div>
			</Table.Footer>
		</Table>
	);
};
