export const DeleteConfirm = ({
	resourceName,
	onConfirm,
	disabled = false,
	onCloseModal,
}) => {
	return (
		<div className="w-full bg-white">
			<h3 className="text-lg font-bold">Delete “{resourceName}”?</h3>

			<div className="px-6 py-4 bg-gray-50">
				<p className="text-gray-700 text-base">
					This action <span className="font-semibold text-red-600">cannot</span>{' '}
					be undone. All data related to <strong>{resourceName}</strong> will be
					permanently deleted.
				</p>
			</div>

			<div className="px-6 py-5 bg-white flex justify-end space-x-3">
				<button
					type="button"
					onClick={onCloseModal}
					disabled={disabled}
					className={`
            px-5 py-2 rounded-md font-medium
            border border-gray-300 text-gray-700 bg-white
            hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            transition ease-in-out duration-150
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
				>
					Cancel
				</button>
				<button
					type="button"
					onClick={onConfirm}
					disabled={disabled}
					className={`
            px-5 py-2 rounded-md font-medium
            bg-red-600 text-white
            hover:bg-red-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
            shadow-md hover:shadow-lg
            transition-transform transform hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
