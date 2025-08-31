import supabase from './supabase';

export async function getApartments() {
	const { data, error } = await supabase.from('apartments').select('*');

	if (error) {
		console.error(error);
		throw new Error('Apartments could not be loaded');
	}

	return data;
}

export async function deleteApartment(id) {
	const { data, error } = await supabase
		.from('apartments')
		.delete()
		.eq('id', id);

	if (error) {
		console.error(error);
		throw new Error('Apartment could not be deleted');
	}
	return data;
}
export async function createEditApartment(newApartment, id) {
	const hasImagePath = newApartment.image?.startsWith?.(supabase.supabaseUrl);

	const imageName = `${Math.random()}-${newApartment.image.name}`.replaceAll(
		'/',
		''
	);
	const imagePath = hasImagePath
		? newApartment.image
		: `${supabase.supabaseUrl}/storage/v1/object/public/apartments-images/${imageName}`;

	// 1. Create/edit apartment
	let query = supabase.from('apartments');

	// A) CREATE
	if (!id) query = query.insert([{ ...newApartment, image: imagePath }]);

	// B) EDIT
	if (id)
		query = query.update({ ...newApartment, image: imagePath }).eq('id', id);

	const { data, error } = await query.select().single();

	if (error) {
		console.error(error);
		throw new Error('Cabin could not be created');
	}

	// 2. Upload image
	if (hasImagePath) return data;

	const { error: storageError } = await supabase.storage
		.from('apartments-images')
		.upload(imageName, newApartment.image);

	// 3. Delete the apartment IF there was an error uplaoding image
	if (storageError) {
		await supabase.from('apartments').delete().eq('id', data.id);
		console.error(storageError);
		throw new Error(
			'Apartment image could not be uploaded and the apartment was not created'
		);
	}

	return data;
}
