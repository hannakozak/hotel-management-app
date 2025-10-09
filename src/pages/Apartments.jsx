import { AddApartment } from '../components/apartments/AddApartment';
import { ApartmentTable } from '../components/apartments/ApartmentTable';

export const Apartments = () => {
	return (
		<div className="max-w-5xl mx-auto p-6">
			<ApartmentTable />
			<AddApartment />
		</div>
	);
};
