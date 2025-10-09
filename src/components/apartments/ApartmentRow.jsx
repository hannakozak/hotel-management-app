import { formatCurrency } from '../../utils/formatCurrency';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { Modal } from '../../ui/Modal';
import { Table } from '../../ui/Table';
import { Menus } from '../../ui/Menus';
import { DeleteConfirm } from '../../ui/DeleteConfirm';
import { useDeleteApartment } from './useDeleteApartment';
import { useCreateApartment } from './useCreateApartment';
import { CreateApartmentForm } from './CreateApartmentForm';

export const ApartmentRow = ({ apartment }) => {
	const { isDeleting, deleteApartment } = useDeleteApartment();
	const { createApartment } = useCreateApartment();

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
		<Table.Row>
			<img
				src={image}
				alt={name}
				className="block w-16 aspect-[3/2] object-cover object-center transform scale-150 -translate-x-2"
			/>

			<div className="text-base font-semibold text-gray-600 font-[Sono]">
				{name}
			</div>

			<div className="text-gray-700">Fits up to {maxCapacity} guests</div>

			<div className="font-semibold font-[Sono] text-gray-800">
				{formatCurrency(regularPrice)}
			</div>

			{discount ? (
				<div className="font-medium font-[Sono] text-green-700">
					{formatCurrency(discount)}
				</div>
			) : (
				<span>&mdash;</span>
			)}

			<div>
				<Modal>
					<Menus>
						<Menus.Menu>
							<Menus.Toggle id={apartmentId} />

							<Menus.List id={apartmentId}>
								<Menus.Button
									icon={<HiSquare2Stack />}
									onClick={handleDuplicate}
								>
									Duplicate
								</Menus.Button>

								<Modal.Open opens="edit">
									<Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
								</Modal.Open>

								<Modal.Open opens="delete">
									<Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
								</Modal.Open>
							</Menus.List>

							<Modal.Window name="edit">
								<CreateApartmentForm apartmentToEdit={apartment} />
							</Modal.Window>

							<Modal.Window name="delete">
								<DeleteConfirm
									resourceName="apartments"
									disabled={isDeleting}
									onConfirm={() => deleteApartment(apartmentId)}
								/>
							</Modal.Window>
						</Menus.Menu>
					</Menus>
				</Modal>
			</div>
		</Table.Row>
	);
};
