import { useForm } from 'react-hook-form';
import { useCreateApartment } from './useCreateApartment';
import { useEditApartment } from './useEditApartment';

export const CreateApartmentForm = ({ apartmentToEdit = {}, setShowForm }) => {
	const { isCreating, createApartment } = useCreateApartment();
	const { isEditing, editApartment } = useEditApartment();
	const isWorking = isCreating || isEditing;

	const { id: editId, ...editValues } = apartmentToEdit;
	const isEditSession = Boolean(editId);

	const { register, handleSubmit, reset, getValues, formState } = useForm({
		defaultValues: isEditSession ? editValues : {},
	});
	const { errors } = formState;

	function onSubmit(data) {
		const image = typeof data.image === 'string' ? data.image : data.image[0];

		if (isEditSession)
			editApartment(
				{ newApartmentData: { ...data, image }, id: editId },
				{
					onSuccess: () => {
						reset();
						setShowForm(false);
					},
				}
			);
		else
			createApartment(
				{ ...data, image },
				{
					onSuccess: () => {
						reset();
						setShowForm(false);
					},
				}
			);
	}

	function onError() {
		// console.log(errors);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit, onError)}
			className=" w-full space-y-6 bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="name" className="font-medium text-gray-700">
					Cabin name
				</label>
				<input
					className="border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					type="text"
					id="name"
					disabled={isWorking}
					{...register('name', { required: 'This field is required' })}
				/>
				{errors?.name && (
					<span className="text-sm text-red-600">{errors.name.message}</span>
				)}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="maxCapacity" className="font-medium text-gray-700">
					Maximum capacity
				</label>
				<input
					className="border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					type="number"
					id="maxCapacity"
					disabled={isWorking}
					{...register('maxCapacity', {
						required: 'This field is required',
						min: { value: 1, message: 'Capacity should be at least 1' },
					})}
				/>
				{errors?.maxCapacity && (
					<span className="text-sm text-red-600">
						{errors.maxCapacity.message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="regularPrice" className="font-medium text-gray-700">
					Regular price
				</label>
				<input
					className="border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					type="number"
					id="regularPrice"
					disabled={isWorking}
					{...register('regularPrice', {
						required: 'This field is required',
						min: { value: 1, message: 'Price should be at least 1' },
					})}
				/>
				{errors?.regularPrice && (
					<span className="text-sm text-red-600">
						{errors.regularPrice.message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="discount" className="font-medium text-gray-700">
					Discount
				</label>
				<input
					className="border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					type="number"
					id="discount"
					disabled={isWorking}
					defaultValue={0}
					{...register('discount', {
						required: 'This field is required',
						validate: (value) =>
							value <= getValues().regularPrice ||
							'Discount should be less than regular price',
					})}
				/>
				{errors?.discount && (
					<span className="text-sm text-red-600">
						{errors.discount.message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="description" className="font-medium text-gray-700">
					Description for website
				</label>
				<textarea
					id="description"
					rows={4}
					className="border border-gray-300 bg-gray-50 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					disabled={isWorking}
					{...register('description', { required: 'This field is required' })}
				/>
				{errors?.description && (
					<span className="text-sm text-red-600">
						{errors.description.message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="image" className="font-medium text-gray-700">
					Apartment photo
				</label>
				<input
					type="file"
					id="image"
					accept="image/*"
					className="file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
					{...register('image', {
						required: isEditSession ? false : 'This field is required',
					})}
				/>
				{errors?.image && (
					<span className="text-sm text-red-600">{errors.image.message}</span>
				)}
			</div>

			<div className="flex justify-end gap-3">
				<button
					type="reset"
					className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-50"
				>
					Cancel
				</button>
				<button
					disabled={isWorking}
					className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
				>
					{isEditSession ? 'Edit Apartment' : 'Create new apartment'}
				</button>
			</div>
		</form>
	);
};
