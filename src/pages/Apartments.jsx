import { ApartmentCard } from '../components/apartments/ApartmentCard';
import { useApartments } from '../components/apartments/useApartment';
import { AddApartment } from '../components/apartments/AddApartment';

export const Apartments = () => {
	const { isLoading, apartments } = useApartments();

	if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

	return (
		<div className="max-w-5xl mx-auto p-6">
			<AddApartment />

			<div
				role="table"
				className="w-full p-3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
			>
				<div
					role="row"
					className=" hidden md:flex justify-between bg-gray-50 border-b border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700"
				>
					<div role="columnheader">Apartment</div>
					<div role="columnheader">Capacity</div>
					<div role="columnheader">Price</div>
					<div role="columnheader">Discount</div>
					<div role="columnheader">Actions</div>
				</div>

				<div className="divide-y divide-gray-200">
					{apartments.map((apartment) => (
						<ApartmentCard apartment={apartment} key={apartment.id} />
					))}
				</div>
			</div>
		</div>
	);
};
