import { AddApartment } from '../components/apartments/AddApartment';
import { ApartmentTable } from '../components/apartments/ApartmentTable';
import { ApartmentTableOperations } from '../components/apartments/ApartmetTableOperations';
export const Apartments = () => {
	return (
		<div className="max-w-5xl mx-auto sm:p-6 p-1">
			<ApartmentTableOperations />
			<ApartmentTable />
			<AddApartment />
		</div>
	);
};
