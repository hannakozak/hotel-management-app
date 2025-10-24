import { AddApartment } from '../components/apartments/AddApartment';
import { ApartmentTable } from '../components/apartments/ApartmentTable';
import { ApartmentTableOperations } from '../components/apartments/ApartmetTableOperations';
export const Apartments = () => {
	return (
		<div className="max-w-5xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Apartments</h1>
			<ApartmentTableOperations />
			<ApartmentTable />
			<AddApartment />
		</div>
	);
};
