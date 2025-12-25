"use client";

import { use, useState, useEffect } from "react";

import AlumniComponent from "@/components/Alumni";

interface ClientAlumniProps {
  searchParams: Promise<{ year?: string }>;
  endYear: number;
}

const ClientAlumni = ({ searchParams, endYear }: ClientAlumniProps) => {
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

  return (
    <AlumniComponent
      selectedYear={selectedYear}
      setSelectedYear={setSelectedYear}
    />
  );
};

export default ClientAlumni;
