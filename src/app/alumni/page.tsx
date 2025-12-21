"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import AlumniComponent from "@/components/Alumni";
import { PageHeader } from "@/components/commons";

const Alumni = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const yearParam = searchParams.get("year");

  const endYear = new Date().getFullYear() + 2;
  const [selectedYear, setSelectedYear] = useState<string>(
    yearParam || endYear.toString()
  );

  useEffect(() => {
    if (yearParam && yearParam !== selectedYear) {
      setSelectedYear(yearParam);
    }
  }, [yearParam, selectedYear]);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    router.push(`/alumni?year=${year}`, { scroll: false });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <PageHeader
        description="They're exemplary, they're buoyant, they're high fliers, they're the veterans. Here's to help you learn more and connect with our respected alumni."
        title="Alumni"
      />
      <AlumniComponent
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
    </main>
  );
};

export default Alumni;
