import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEditApartment } from '../../services/apiApartments';

export const useCreateApartment = () => {
	const queryClient = useQueryClient();

	const { mutate: createApartment, isLoading: isCreating } = useMutation({
		mutationFn: createEditApartment,
		onSuccess: () => {
			toast.success('New apartment successfully created');
			queryClient.invalidateQueries({ queryKey: ['apartments'] });
		},
		onError: (err) => toast.error(err.message),
	});

	return { isCreating, createApartment };
};
