import { CreateApartmentForm } from './CreateApartmentForm';
import { Modal } from '../../ui/Modal';

export const AddApartment = () => {
	return (
		<div>
			<Modal>
				<Modal.Open opens="apartment-form">
					<button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
						Add new apartment
					</button>
				</Modal.Open>

				<Modal.Window name="apartment-form">
					<CreateApartmentForm />
				</Modal.Window>
			</Modal>
		</div>
	);
};
