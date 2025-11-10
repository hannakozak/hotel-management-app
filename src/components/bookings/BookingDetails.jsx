import { BookingDataBox } from './BookingDataBox';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { Modal } from '../../ui/Modal';
import { DeleteConfirm } from '../../ui/DeleteConfirm';
import { Tag } from '../../ui/Tag';

export const BookingDetails = () => {
	const { booking, isLoading } = useBooking();

	const moveBack = useMoveBack();

	if (isLoading) return <div>Loading...</div>;
	if (!booking) return <div>No booking found</div>;

	const { status, id: bookingId } = booking;

	const statusToTagName = {
		unconfirmed: 'blue',
		'checked-in': 'green',
		'checked-out': 'gray',
	};
	console.log(booking);
	return (
		<div className="space-y-6 p-4 sm:p-6 lg:p-8">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div className="flex items-center gap-3">
					<h1 className="text-2xl font-semibold">Booking #{bookingId}</h1>
					<Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
				</div>
				<button> Back</button>
			</div>

			<div className="bg-white shadow rounded-2xl p-4 sm:p-6">
				<BookingDataBox booking={booking} />
			</div>

			<div className="flex flex-wrap gap-3 justify-start sm:justify-end">
				{status === 'unconfirmed' && <button>Check in</button>}

				{status === 'checked-in' && (
					<button icon={<HiArrowUpOnSquare />}>Check out</button>
				)}
				<Modal>
					<Modal.Open opens="delete">
						<button>Delete booking</button>
					</Modal.Open>
					<Modal.Window name="delete">
						<DeleteConfirm resourceName="booking" />
					</Modal.Window>
				</Modal>
				<button onClick={moveBack}>Back</button>
			</div>
		</div>
	);
};
