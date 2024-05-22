"use client"
import React, { useState, useEffect } from "react";
import ContestsFilter from "./ContestsFilter";
import ContestCard from "./ContestCard";
import { Suspense } from "react";
import { Contest } from "@prisma/client";
import { Skeleton } from "@/components/ui/skeleton"
 
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

interface BrowseContestsTabProps {
  initialContests: Contest[];
}

const fetchFilteredContests = async (filters: any) => {
  const response = await fetch('/api/contests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filters),
  });
  const data = await response.json();
  return data.contests;
};

const BrowseContestsTab: React.FC<BrowseContestsTabProps> = ({ initialContests }) => {
  const [contests, setContests] = useState<Contest[]>(initialContests);
  const [loading, setLoading] = useState(false);

  const handleFilterChange = async (filters: any) => {
    setLoading(true);
    const filteredContests = await fetchFilteredContests(filters);
    setContests(filteredContests);
    setLoading(false);
  };

  return (
    <main className="p-3">
      <div className="flex flex-col items-center justify-center">
        <ContestsFilter onFilterChange={handleFilterChange} />
      </div>
      <Suspense fallback={<SkeletonCard/>}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            { contests.length==0 ? <h2>No contests found</h2> : contests.map((contest) => ( 
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </div>
      </Suspense>
    </main>
  );
};

export default BrowseContestsTab;
