import UpdateSettingsForm from '../components/settings/updateSettingsForm';

export const Settings = () => {
	return (
		<main className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Settings Page</h1>
			<p>
				This is the settings page where users can manage their application
				settings.
			</p>
			<UpdateSettingsForm />
		</main>
	);
};
