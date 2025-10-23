import { BookingRow } from './BookingRow';
import { useBookings } from './useBookings';

export const BookingTable = () => {
	const { bookings, isLoading } = useBookings();

	if (isLoading)
		return <div className="flex justify-center py-10">loading...</div>;

	if (!bookings.length)
		return (
			<div className="text-center text-gray-500 py-10">No bookings found.</div>
		);

	return (
		<div className="p-4 ">
			<div className="overflow-x-auto">
				<table className="min-w-full text-left text-sm">
					<thead className="border-b ">
						<tr className="grid grid-cols-[0.6fr_1.6fr_2fr_1.4fr_1.4fr_3.2rem] gap-2 px-2 py-3 font-semibold text-gray-700">
							<th>Cabin</th>
							<th>Guest</th>
							<th>Dates</th>
							<th>Status</th>
							<th>Amount</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{bookings.map((booking) => (
							<tr
								key={booking.id}
								className="grid grid-cols-[0.6fr_1.6fr_2fr_1.4fr_1.4fr_3.2rem] gap-2 border-b px-2 py-3"
							>
								<BookingRow booking={booking} />
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BookingTable;
