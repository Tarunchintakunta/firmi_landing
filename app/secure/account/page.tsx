export default function AccountPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="ml-0 flex flex-1 flex-col md:ml-64">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your account settings and preferences.
          </p>

          <div className="mt-6 grid gap-6">
            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Profile Information</h2>
              <p className="text-sm text-muted-foreground">
                Update your account profile information and email address.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Password</h2>
              <p className="text-sm text-muted-foreground">
                Change your password and security settings.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h2 className="text-lg font-medium">Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications and updates.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
