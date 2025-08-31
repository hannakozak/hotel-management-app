import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditApartment } from '../../services/apiApartments';
import { toast } from 'react-hot-toast';

export const useEditApartment = () => {
	const queryClient = useQueryClient();

	const { mutate: editApartment, isLoading: isEditing } = useMutation({
		mutationFn: ({ newApartmentData, id }) =>
			createEditApartment(newApartmentData, id),
		onSuccess: () => {
			toast.success('Apartment successfully edited');
			queryClient.invalidateQueries({ queryKey: ['apartments'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { isEditing, editApartment };
};
