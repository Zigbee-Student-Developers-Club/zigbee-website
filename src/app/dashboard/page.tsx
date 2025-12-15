import { redirect } from "next/navigation";

export default function DashboardPage() {
  const isAuthorized = false;

  if (!isAuthorized) {
    redirect("/unauthorized");
  }

  return (
    <div className="p-6 flex min-h-[calc(100vh - 4rem)] items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>This is the Admin's dashboard page.</p>
    </div>
  );
}
