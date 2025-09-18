import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
	} = useSettings();
	const { isUpdating, updateSetting } = useUpdateSetting();

	if (isLoading)
		return (
			<div className="flex items-center justify-center py-10">
				<div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
			</div>
		);

	function handleUpdate(e, field) {
		const { value } = e.target;
		if (!value) return;
		updateSetting({ [field]: value });
	}

	return (
		<form className="space-y-6 p-6 bg-white rounded-2xl shadow">
			{/* Minimum nights */}
			<div className="flex flex-col gap-2">
				<label
					htmlFor="min-nights"
					className="text-sm font-medium text-gray-700"
				>
					Minimum nights/booking
				</label>
				<input
					type="number"
					id="min-nights"
					defaultValue={minBookingLength}
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, 'minBookingLength')}
					className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:bg-gray-100"
				/>
			</div>

			{/* Maximum nights */}
			<div className="flex flex-col gap-2">
				<label
					htmlFor="max-nights"
					className="text-sm font-medium text-gray-700"
				>
					Maximum nights/booking
				</label>
				<input
					type="number"
					id="max-nights"
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
					className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:bg-gray-100"
				/>
			</div>

			{/* Maximum guests */}
			<div className="flex flex-col gap-2">
				<label
					htmlFor="max-guests"
					className="text-sm font-medium text-gray-700"
				>
					Maximum guests/booking
				</label>
				<input
					type="number"
					id="max-guests"
					defaultValue={maxGuestsPerBooking}
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
					className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:bg-gray-100"
				/>
			</div>

			{/* Breakfast price */}
			<div className="flex flex-col gap-2">
				<label
					htmlFor="breakfast-price"
					className="text-sm font-medium text-gray-700"
				>
					Breakfast price
				</label>
				<input
					type="number"
					id="breakfast-price"
					defaultValue={breakfastPrice}
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
					className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200 disabled:bg-gray-100"
				/>
			</div>
		</form>
	);
}

export default UpdateSettingsForm;
