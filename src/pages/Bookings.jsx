import { BookingTable } from '../components/bookings/BookingsTable';

export const Bookings = () => {
	return (
		<main className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Bookings</h1>
			<BookingTable />
		</main>
	);
};
