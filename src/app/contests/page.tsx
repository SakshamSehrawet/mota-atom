import { ReactNode } from "react";
import getSession from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ContestsPage from "./ContestsPage";
import BrowseContestsTab from "./tabs/browse/BrowseContestsTab";
import prisma from "@/lib/prisma";
import { getContests } from "@/lib/getContests";
import {
  UserRoundCog,
  Trophy,
  Plus,
} from "lucide-react";
import BottomBar from "@/components/bottom-bar/BottomBar";
import { Contest } from "@prisma/client";

export const metadata: Metadata = {
  title: "Contests",
};

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/contests");
  }

  const contests: Contest[] = await prisma.contest.findMany({
    where: {},
    orderBy: { createdAt: "desc" },
  });
  const barMappings: { tooltip: string; icon: ReactNode; content: ReactNode }[] =
  [
    { tooltip: "Browse Contests", icon: <Trophy />, content:<BrowseContestsTab contests={contests}/>},
    { tooltip: "My Contests", icon: <UserRoundCog />, content: <div>Settings Content</div> },
    { tooltip: "Create Contest", icon: <Plus />, content: <div>Create Content</div> },
  ]

  return (
    <main className="">
        {/* <ContestsPage user={user} /> */}
        <section className="mx-auto space-y-6">
          <BottomBar barMappings={barMappings}/>
        </section>
      </main>
  );
}