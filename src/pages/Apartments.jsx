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
			<h1 className="text-2xl font-bold mb-4">Rooms Page</h1>
			<p>This is the rooms page where users can view and manage hotel rooms.</p>
			{apartments.map((apartment) => (
				<div key={apartment.id} className="border p-4 mb-4">
					<img
						src={apartment.image}
						alt={apartment.name}
						height={200}
						width={200}
					/>
					<h2 className="text-xl font-bold">{apartment.name}</h2>
					<p>{apartment.description}</p>
					<p>Price: ${apartment.regularPrice}</p>
					<p>Fits up to {apartment.maxCapacity} guests</p>
					<p>
						Discount:{' '}
						{apartment.discount
							? `${apartment.discount}%`
							: 'No discount available'}
					</p>
				</div>
			))}
		</main>
	);
};
