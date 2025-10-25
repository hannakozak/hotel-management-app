import UpdateSettingsForm from '../components/settings/updateSettingsForm';

export const Settings = () => {
	return (
		<main className="container mx-auto p-4">
			<p>
				This is the settings page where users can manage their application
				settings.
			</p>
			<UpdateSettingsForm />
		</main>
	);
};
