import { format } from 'date-fns';
import {
	HiArrowDownOnSquare,
	HiArrowUpOnSquare,
	HiEye,
	HiTrash,
} from 'react-icons/hi2';
import { Table } from '../../ui/Table';
import { formatCurrency } from '../../utils/formatCurrency';
import { Modal } from '../../ui/Modal';
import { Menus } from '../../ui/Menus';

export const BookingRow = ({
	booking: {
		id: bookingId,
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
		<Table.Row>
			<div className="font-semibold font-small text-base">{apartmentName}</div>
			<div className="flex flex-col gap-0.5 text-center">
				<span className="font-small">{guestName}</span>
				<span className="text-xs">{email}</span>
			</div>
			<div className="flex flex-col gap-0.5 text-center">
				<span className="font-small">
					{format(new Date(startDate), 'MMM dd yyyy')}-
					{format(new Date(endDate), 'MMM dd yyyy')}
				</span>
				<span className="text-xs">{numNights} night stay</span>
			</div>

			<div>
				<span
					className={`px-2 py-1 rounded-md text-xs font-medium capitalize ${statusColors[status]}`}
				>
					{status.replace('-', ' ')}
				</span>
			</div>
			<div className="font-semibold">{formatCurrency(totalPrice)}</div>
			<Modal className="text-right relative">
				<Menus className="flex justify-end gap-2">
					<Menus.Toggle id={bookingId} />
					<Menus.List id={bookingId}>
						<Menus.Button className="text-gray-600 hover:text-teal-600">
							<HiEye className="w-5 h-5" />
						</Menus.Button>
						{status === 'unconfirmed' && (
							<Menus.Button className="text-gray-600 hover:text-teal-600">
								<HiArrowDownOnSquare className="w-5 h-5" />
							</Menus.Button>
						)}
						{status === 'checked-in' && (
							<Menus.Button className="text-gray-600 hover:text-teal-600">
								<HiArrowUpOnSquare className="w-5 h-5" />
							</Menus.Button>
						)}

						<Menus.Button className="text-gray-600 hover:text-teal-600">
							<HiTrash className="w-5 h-5" />
						</Menus.Button>
					</Menus.List>
				</Menus>
			</Modal>
		</Table.Row>
	);
};
