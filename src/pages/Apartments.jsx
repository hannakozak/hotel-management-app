import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getApartments } from '../services/apiApartments';

export const Apartments = () => {
	const {
		isLoading,
		data: apartments,
		error,
	} = useQuery({
		queryKey: ['apartments'],
		queryFn: getApartments,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error loading apartments</div>;
	}
	if (!apartments || apartments.length === 0) {
		return <div>No apartments available</div>;
	}
	return (
		<main className="container mx-auto p-4">
			<h1 className="text-2xl mb-6 font-bold">Apartments</h1>

			<div className="mx-3 mb-6">
				<table className="hidden min-w-full md:table">
					<thead className="font-semibold text-gray-500">
						<tr className="[&>th]:px-4 [&>th]:py-2">
							<th className="pl-6 pr-0 py-3 text-left">Apartment</th>
							<th className="pl-0 pr-6 py-3 text-center">Capacity</th>
							<th className="px-6 py-3 text-center">Price</th>
							<th className="px-6 py-3 text-center">Discount</th>
							<th className="px-6 py-3 text-center">Action</th>
						</tr>
					</thead>
					<tbody>
						{apartments.map((apartment) => (
							<tr
								key={apartment.id}
								className="w-full border-b py-3 text-sm border-gray-300 hover:bg-gray-100"
							>
								<td className="block md:table-cell pl-6 pr-0 py-4">
									<div className="flex items-center space-x-4">
										<img
											src={apartment.image}
											alt={apartment.name}
											className="w-32 h-20 object-cover rounded-lg"
										/>
										<span className="font-semibold">{apartment.name}</span>
									</div>
								</td>
								<td className="block md:table-cell pl-0 pr-6 py-4 text-center">
									{apartment.maxCapacity}
								</td>
								<td className="block md:table-cell px-6 py-4 text-center">
									${apartment.regularPrice}
								</td>
								<td className="block md:table-cell px-6 py-4 text-center">
									{apartment.discount
										? `${apartment.discount}%`
										: 'No discount'}
								</td>
								<td className="block md:table-cell px-6 py-4 text-center">
									<button
										onClick={() => console.log}
										className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="md:hidden flex flex-col md:flex-row md:flex-wrap  gap-4 p-2 text-sm text-gray-500">
					{apartments.map((apartment) => (
						<div
							key={apartment.id}
							className="mb-2 w-full rounded-md p-4 border-b border-gray-200 shadow-sm flex flex-col"
						>
							<div className="flex mb-6 justify-between">
								<div className="flex items-center space-x-2">
									<img
										src={apartment.image}
										alt={apartment.name}
										className="w-32 h-20 object-cover rounded-lg"
									/>
									<span className="font-semibold">{apartment.name}</span>
								</div>

								<button
									onClick={() => console.log}
									className="bg-red-500 text-white text-center align-middle h-8 px-4 rounded-lg hover:bg-red-600"
								>
									Delete
								</button>
							</div>
							<div className="flex space-x-4 w-full">
								<table className="w-full items-center">
									<thead>
										<tr className="text-gray-500">
											<th className="text-left">Capacity</th>
											<th className="text-left">Price</th>
											<th className="text-right">Discount</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-left">{apartment.maxCapacity}</td>
											<td className="text-left">${apartment.regularPrice}</td>
											<td className="text-right">
												{apartment.discount
													? `${apartment.discount}%`
													: 'No discount'}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};
