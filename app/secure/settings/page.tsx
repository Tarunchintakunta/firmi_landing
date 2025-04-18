export default function SettingsPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="ml-0 flex flex-1 flex-col md:ml-64">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="mt-2 text-muted-foreground">
            Configure application settings and preferences.
          </p>

          <div className="mt-6 grid gap-6">
            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Appearance</h2>
              <p className="text-sm text-muted-foreground">
                Customize the look and feel of the application.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Language</h2>
              <p className="text-sm text-muted-foreground">
                Choose your preferred language for the interface.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Privacy</h2>
              <p className="text-sm text-muted-foreground">
                Manage your privacy settings and data usage.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
