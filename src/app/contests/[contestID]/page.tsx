// app/contests/[contestID]/page.tsx
import prisma from "@/lib/prisma"; // Adjust the import path to your prisma instance
import Image from "next/image";
import { avatarPlaceholder, relativeDate } from "@/lib/utils";
import {
  Lock,
  LockOpen,
  UserRoundCog,
  FileClock,
  ShieldCheck,
  ShieldBan,
  CalendarIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import NotFound from "./not-found";

interface ContestDetailProps {
  params: {
    contestID: string;
  };
}

const fetchContest = async (id: string) => {
  const contestId = parseInt(id, 10); // Parse the string to an integer
  if (isNaN(contestId)) {
    throw new Error("Invalid contest ID");
  }

  const contest = await prisma.contest.findUnique({
    where: { id: contestId },
  });
  return contest;
};

const ContestDetailPage = async ({ params }: ContestDetailProps) => {
  const contest = await fetchContest(params.contestID);

  if (!contest) {
    return <NotFound/>;
  }

  return (
    <div className="container mx-auto">
      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="flex flex-row gap-6">
          <div className="flex-shrink-0">
            <Image
              src={
                contest.logo ||
                avatarPlaceholder(`${contest.title}${contest.admin}`)
              }
              alt={`${contest.admin} logo`}
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl font-bold">{contest.title}</h1>
            <p className="flex items-center gap-1.5 text-lg text-muted-foreground">
              <UserRoundCog size={20} className="shrink-0" />
              {contest.admin}
            </p>
            <div className="mt-4">
              <Badge>{contest.type}</Badge>
              <p className="mt-2 flex items-center gap-1.5">
                {contest.needApproval ? (
                  <Lock size={16} className="shrink-0" />
                ) : (
                  <LockOpen size={16} className="shrink-0" />
                )}
                <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
                  {contest.needApproval ? (
                    <span className="text-orange-500">
                      Admin approval required
                    </span>
                  ) : (
                    <span className="text-green-500">
                      Admin approval not required
                    </span>
                  )}
                </span>
              </p>
              <p className="mt-2 flex items-center gap-1.5">
                <FileClock size={16} className="shrink-0" />
                {relativeDate(contest.createdAt)}
              </p>
              <div className="mt-4">{contest.description}</div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {contest.start.toLocaleDateString()} -{" "}
              {contest.end.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetailPage;
