"use client";

import { useRouter } from "next/navigation";
import { use, useState, useEffect } from "react";

import AlumniComponent from "@/components/Alumni";

interface ClientAlumniProps {
  searchParams: Promise<{ year?: string }>;
  endYear: number;
}

const ClientAlumni = ({ searchParams, endYear }: ClientAlumniProps) => {
  const router = useRouter();
  const params = use(searchParams);
  const yearParam = params.year;
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
    <AlumniComponent
      selectedYear={selectedYear}
      onYearChange={() => handleYearChange(selectedYear)}
    />
  );
};

export default ClientAlumni;
