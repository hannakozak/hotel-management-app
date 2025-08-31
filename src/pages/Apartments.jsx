import { useState } from 'react';
import { ApartmentCard } from '../components/apartments/ApartmentCard';
import { useApartments } from '../components/apartments/useApartment';
import { CreateApartmentForm } from '../components/apartments/CreateApartmentForm';

export const Apartments = () => {
	const { isLoading, apartments } = useApartments();
	const [showForm, setShowForm] = useState(false);

	if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

	return (
		<div className="max-w-5xl mx-auto p-6">
			<div className="flex flex-col justify-between mb-6">
				<button
					onClick={() => setShowForm((show) => !show)}
					className="px-4 py-2 rounded-xl border border-gray-300 transition"
				>
					{showForm ? 'Cancel' : 'Add new apartment'}
				</button>
			</div>

			{showForm && (
				<div className="mb-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
					<CreateApartmentForm />
				</div>
			)}

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
