import { Suspense } from "react";

import { PageHeader } from "@/components/commons";

import ClientAlumni from "./Client";

interface PageProps {
  searchParams: Promise<{ year?: string }>;
}

const AlumniPage = async ({ searchParams }: PageProps) => {
  const endYear = new Date().getFullYear() + 2;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        description="They're exemplary, they're buoyant, they're high fliers, they're the veterans. Here's to help you learn more and connect with our respected alumni."
        title="Alumni"
      />
      <Suspense fallback={<div>Loading alumni data...</div>}>
        <ClientAlumni endYear={endYear} searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default AlumniPage;
