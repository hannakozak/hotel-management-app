import { format } from 'date-fns';
import {
	HiArrowDownOnSquare,
	HiArrowUpOnSquare,
	HiEye,
	HiTrash,
} from 'react-icons/hi2';

import { formatCurrency } from '../../utils/formatCurrency';

export const BookingRow = ({
	booking: {
		startDate,
		endDate,
		numNights,
		totalPrice,
		status,
		guests: { fullName: guestName, email },
		apartments: { name: apartmentName },
	},
}) => {
	const statusColors = {
		unconfirmed: 'text-teal-600',
		'checked-in': 'bg-green-100 text-teal-900',
		'checked-out': 'bg-gray-200 text-gray-700',
	};

	return (
		<>
			<td className="font-semibold text-base">{apartmentName}</td>
			<td className="flex flex-col gap-0.5">
				<span className="font-medium">{guestName}</span>
				<span className="text-xs">{email}</span>
			</td>
			<td className="flex flex-col gap-0.5">
				<span className="font-medium">
					{format(new Date(startDate), 'MMM dd yyyy')} —
					{format(new Date(endDate), 'MMM dd yyyy')}
				</span>
				<span className="text-xs">{numNights} night stay</span>
			</td>

			<td>
				<span
					className={`px-2 py-1 rounded-md text-xs font-medium capitalize ${statusColors[status]}`}
				>
					{status.replace('-', ' ')}
				</span>
			</td>
			<td className="font-semibold">{formatCurrency(totalPrice)}</td>
			<td className="text-right relative">
				<div className="flex justify-end gap-2">
					<button className="text-gray-600 hover:text-teal-600">
						<HiEye className="w-5 h-5" />
					</button>
					{status === 'unconfirmed' && (
						<button className="text-gray-600 hover:text-teal-600">
							<HiArrowDownOnSquare className="w-5 h-5" />
						</button>
					)}
					{status === 'checked-in' && (
						<button className="text-gray-600 hover:text-teal-600">
							<HiArrowUpOnSquare className="w-5 h-5" />
						</button>
					)}

					<button className="text-gray-600 hover:text-teal-600">
						<HiTrash className="w-5 h-5" />
					</button>
				</div>
			</td>
		</>
	);
};
