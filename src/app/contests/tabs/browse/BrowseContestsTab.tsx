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
        <section className="mx-auto max-w-7xl space-y-6">
          <h1 className="text-3xl font-bold">browse contest tab</h1>
        </section>
        <div className="w-full max-w-2xl mx-auto">
          <ContestsFilter/>
        </div>
        <Suspense fallback={<p>Loading feed...</p>}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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