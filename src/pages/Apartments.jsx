import React, { useEffect } from 'react';
import { getApartments } from '../services/apiApartments.js';

export const Apartments = () => {
	useEffect(function () {
		getApartments().then((data) => console.log(data));
	}, []);
	return (
		<main className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Rooms Page</h1>
			<p>This is the rooms page where users can view and manage hotel rooms.</p>
		</main>
	);
};
