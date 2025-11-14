import { BookingDataBox } from '../bookings/BookingDataBox';
import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from '../bookings/useBooking';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCheckin } from './useCheckin';
import { useSettings } from '../settings/useSettings';

export const CheckinBooking = () => {
	const [confirmPaid, setConfirmPaid] = useState(false);
	const [addBreakfast, setAddBreakfast] = useState(false);
	const { booking, isLoading } = useBooking();
	const { settings, isLoading: isLoadingSettings } = useSettings();

	useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

	const moveBack = useMoveBack();
	const { checkin, isCheckingIn } = useCheckin();

	if (isLoading || isLoadingSettings) return <div>Loading...</div>;

	const {
		id: bookingId,
		guests,
		totalPrice,
		numGuests,
		hasBreakfast,
		numNights,
	} = booking;

	const optionalBreakfastPrice =
		settings.breakfastPrice * numNights * numGuests;

	function handleCheckin() {
		if (!confirmPaid) return;

		if (addBreakfast) {
			checkin({
				bookingId,
				breakfast: {
					hasBreakfast: true,
					extrasPrice: optionalBreakfastPrice,
					totalPrice: totalPrice + optionalBreakfastPrice,
				},
			});
		} else {
			checkin({ bookingId, breakfast: {} });
		}
	}

	return (
		<div className="pt-12 max-w-sm md:max-w-2xl mx-auto">
			<div>
				<h1 className="flex items-center text-2xl font-semibold mb-4">
					Check in booking ID:<span>{bookingId}</span>
				</h1>
				<button onClick={moveBack}>&larr; Back</button>
			</div>

			<BookingDataBox booking={booking} />
			<div className="flex flex-col gap-4 my-4">
				{!hasBreakfast && (
					<label htmlFor="breakfast" className="flex items-center gap-2">
						<input
							type="checkbox"
							checked={addBreakfast}
							onChange={() => {
								setAddBreakfast((add) => !add);
								setConfirmPaid(false);
							}}
							id="breakfast"
						/>
						Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
					</label>
				)}

				<label htmlFor="confirm" className="flex items-center gap-2">
					<input
						type="checkbox"
						checked={confirmPaid}
						onChange={() => setConfirmPaid((confirm) => !confirm)}
						disabled={confirmPaid || isCheckingIn}
						id="confirm"
					/>
					I confirm that {guests.fullName} has paid the total amount of{' '}
					{!addBreakfast
						? formatCurrency(totalPrice)
						: `${formatCurrency(
								totalPrice + optionalBreakfastPrice
						  )} (${formatCurrency(totalPrice)} + ${formatCurrency(
								optionalBreakfastPrice
						  )})`}
				</label>
			</div>

			<div className="flex gap-4">
				<button
					className="bg-teal-600 text-white px-4 py-2 rounded disabled:opacity-50"
					onClick={handleCheckin}
					disabled={!confirmPaid || isCheckingIn}
				>
					Check in booking ID: {bookingId}
				</button>
				<button
					className="bg-gray-200 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
					onClick={moveBack}
				>
					Back
				</button>
			</div>
		</div>
	);
};
