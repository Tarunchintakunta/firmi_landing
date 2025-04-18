export default function TablesPage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="ml-0 flex flex-1 flex-col md:ml-64">
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Tables</h1>
          <p className="mt-2 text-muted-foreground">
            View and manage your data tables.
          </p>

          <div className="mt-6">
            <div className="rounded-lg border p-8 text-center">
              <p className="text-muted-foreground">
                No tables created yet. Create a table to get started.
              </p>
              <button className="mt-4 rounded-md bg-primary px-4 py-2 text-primary-foreground">
                Create Table
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
