import { BookingTable } from '../components/bookings/BookingsTable';
import { BookingsTableOperations } from '../components/bookings/BookingsTableOperations';

export const Bookings = () => {
	return (
		<main className="container mx-auto p-4">
			<BookingsTableOperations />
			<BookingTable />
		</main>
	);
};
