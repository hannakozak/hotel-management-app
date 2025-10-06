import { formatCurrency } from '../../utils/formatCurrency';
import { HiPencil, HiTrash, HiSquare2Stack } from 'react-icons/hi2';
import { useDeleteApartment } from './useDeleteApartment';
import { useCreateApartment } from './useCreateApartment';
import { CreateApartmentForm } from './CreateApartmentForm';
import { Modal } from '../../ui/Modal';
import { DeleteConfirm } from '../../ui/DeleteConfirm';

export const ApartmentCard = ({ apartment }) => {
	const { isDeleting, deleteApartment } = useDeleteApartment();
	const { isCreating, createApartment } = useCreateApartment();

	const {
		id: apartmentId,
		name,
		maxCapacity,
		regularPrice,
		discount,
		image,
		description,
	} = apartment;

	const handleDuplicate = () => {
		createApartment({
			name: `Copy of ${name}`,
			maxCapacity,
			regularPrice,
			discount,
			image,
			description,
		});
	};

	return (
		<>
			<div
				role="row"
				className="grid grid-cols-2 md:grid md:grid-cols-6 items-center gap-4 px-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition"
			>
				<div className="w-full md:col-span-1 flex justify-center md:justify-start">
					<img
						src={image}
						alt={name}
						className="w-full max-w-[120px] h-28 md:w-20 md:h-16 rounded-lg object-cover shadow-sm"
					/>
				</div>
				<div className="md:col-span-1 ml-3 font-medium text-gray-800">
					{name}
				</div>
				<div className="md:col-span-1 text-gray-600 text-sm text-center md:text-left">
					Fits up to {maxCapacity} guests
				</div>
				<div className="md:col-span-1 font-semibold text-gray-700 text-center md:text-left">
					{formatCurrency(regularPrice)}
				</div>
				<div className="md:col-span-1 text-center md:text-left">
					{discount ? (
						<span className="text-green-600 font-medium">
							{formatCurrency(discount)}
						</span>
					) : (
						<span className="text-gray-400">&mdash;</span>
					)}
				</div>

				<div className="flex justify-center md:justify-start">
					<button
						disabled={isCreating}
						onClick={handleDuplicate}
						className="rounded-lg hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition disabled:opacity-50"
					>
						<HiSquare2Stack className="w-5 h-5" />
					</button>
					<Modal>
						<Modal.Open opens="edit">
							<button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-yellow-600 transition">
								<HiPencil className="w-5 h-5" />
							</button>
						</Modal.Open>

						<Modal.Window name="edit">
							<CreateApartmentForm apartmentToEdit={apartment} />
						</Modal.Window>
						<Modal.Open opens="delete">
							<button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-red-600 transition disabled:opacity-50">
								<HiTrash className="w-5 h-5" />
							</button>
						</Modal.Open>
						<Modal.Window name="delete">
							<DeleteConfirm
								resourceName="apartment"
								onConfirm={() => deleteApartment(apartmentId)}
								disabled={isDeleting}
							/>
						</Modal.Window>
					</Modal>
				</div>
			</div>
		</>
	);
};
