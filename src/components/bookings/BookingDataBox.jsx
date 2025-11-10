import { format, isToday } from 'date-fns';
import {
	HiOutlineChatBubbleBottomCenterText,
	HiOutlineCurrencyDollar,
	HiOutlineHomeModern,
} from 'react-icons/hi2';
import { formatDistanceFromNow } from '../../utils/formatDistanceFromNow';
import { formatCurrency } from '../../utils/formatCurrency';

export const BookingDataBox = ({ booking }) => {
	const {
		created_at,
		startDate,
		endDate,
		numNights,
		numGuests,
		totalPrice,
		observations,
		isPaid,
		guests: { fullName: guestName, email, country, countryFlag, nationalID },
		apartments: { name: apartmentName },
	} = booking;

	return (
		<section className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
			<header className="bg-teal-600 text-indigo-100 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
				<div className="flex items-center gap-3 text-indigo-50">
					<HiOutlineHomeModern className="h-7 w-7" />
					<p className="font-semibold text-lg">
						{numNights} night{numNights > 1 ? 's' : ''} in Apartment{' '}
						<span className="font-bold text-xl ml-1">{apartmentName}</span>
					</p>
				</div>
				<p className="text-sm sm:text-base">
					{format(new Date(startDate), 'EEE, MMM dd yyyy')} (
					{isToday(new Date(startDate))
						? 'Today'
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
				</p>
			</header>

			<section className="px-6 py-5 space-y-4">
				<div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm mb-4">
					{countryFlag && (
						<img
							src={countryFlag}
							alt={`Flag of ${country}`}
							className="w-6 h-4"
						/>
					)}
					<p className="font-medium text-gray-800">
						{guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
					</p>
					<span className="mx-1 text-gray-400">&bull;</span>
					<p>{email}</p>
					<span className="mx-1 text-gray-400">&bull;</span>
					<p>National ID {nationalID}</p>
				</div>

				{observations && (
					<>
						<HiOutlineChatBubbleBottomCenterText className="inline h-5 w-5 mr-2 text-gray-400" />
						{observations}
					</>
				)}

				<div
					className={`flex items-center justify-between px-5 py-3 rounded-lg mt-6 text-sm font-medium ${
						isPaid ? 'bg-green-100 text-green-700' : 'bg-teal-100 text-teal-700'
					}`}
				>
					<div className="flex items-center gap-2">
						<HiOutlineCurrencyDollar className="h-5 w-5" />
						<div>
							<p className="font-semibold">
								Total price: {formatCurrency(totalPrice)}
							</p>
						</div>
					</div>
					<p className="uppercase text-xs font-semibold">
						{isPaid ? 'Paid' : 'Will pay at property'}
					</p>
				</div>
			</section>

			<footer className="px-6 py-3 border-t text-right text-xs text-gray-500">
				Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
			</footer>
		</section>
	);
};
