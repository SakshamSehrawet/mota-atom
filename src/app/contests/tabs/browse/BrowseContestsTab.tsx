import ContestsFilter from "./ContestsFilter";
import ContestCard from "./ContestCard";
import { Suspense } from "react";
import { Contest } from "@prisma/client";
interface BrowseContestsTabProps {
  contests:Contest[];
}

const BrowseContestsTab: React.FC<BrowseContestsTabProps> = ({ contests }) => {
  return (
    <main className="p-3">
        <div className="flex flex-col items-center justify-center">
          <ContestsFilter/>
        </div>
        <Suspense fallback={<p>Loading feed...</p>}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {contests.map((contest) => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </div>
        </Suspense>
    </main>
  );
}
export default BrowseContestsTab;