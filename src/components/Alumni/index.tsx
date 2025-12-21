"use client";
import { useRouter } from "next/navigation";
import React from "react";

import Card from "@/components/Alumni/Card";
import { alumniData } from "@/components/Alumni/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AlumniProps {
  selectedYear: string;
  // eslint-disable-next-line no-unused-vars
  setSelectedYear: (year: string) => void;
}

const Alumni = ({ selectedYear, setSelectedYear }: AlumniProps) => {
  const router = useRouter();
  const endYear = new Date().getFullYear();
  const startYear = 1996;

  const batchTabs = Array.from({ length: endYear - startYear + 1 }, (_, i) => ({
    value: (endYear - i).toString(),
    label: `Batch ${endYear - i}`,
  }));

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    router.push(`/alumni?year=${year}`, { scroll: false });
  };

  return (
    <div className="w-full p-6 sm:px-6 md:py-8">
      {/* Title */}
      <h3 className="mb-6 text-center text-xl font-semibold capitalize sm:mb-8 sm:text-2xl md:text-3xl">
        Batch {selectedYear}
      </h3>

      <Tabs
        className="container mx-auto max-w-[1400px]"
        value={selectedYear}
        onValueChange={handleYearChange}
      >
        {/* Tabs List */}
        <TabsList className="mb-6 flex w-full flex-wrap justify-start rounded-lg bg-transparent md:mb-8">
          <ScrollArea className="w-full rounded-md border border-gray-200 bg-white shadow-sm">
            <div className="flex space-x-2 p-3 sm:space-x-3 sm:p-4">
              {batchTabs.map(({ value, label }) => (
                <TabsTrigger
                  className="min-w-fit cursor-pointer whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 hover:bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white sm:px-4 sm:py-2.5 sm:text-sm dark:hover:bg-teal-900 dark:data-[state=active]:bg-teal-600"
                  key={value}
                  value={value}
                >
                  {label}
                </TabsTrigger>
              ))}
            </div>
            <ScrollBar className="h-2" orientation="horizontal" />
          </ScrollArea>
        </TabsList>

        {/* Tabs Content */}
        <div className="min-h-[400px]">
          <TabsContent className="mt-8" value={selectedYear}>
            {alumniData[selectedYear as unknown as keyof typeof alumniData] &&
            alumniData[selectedYear as unknown as keyof typeof alumniData]
              .length > 0 ? (
              <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
                {alumniData[
                  selectedYear as unknown as keyof typeof alumniData
                ].map((alum, index) => (
                  <Card key={index} {...alum} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-center">
                  <p className="text-base text-gray-600 sm:text-lg dark:text-gray-400">
                    No records found for this batch.
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                    Try selecting a different year.
                  </p>
                </div>
              </div>
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Alumni;
